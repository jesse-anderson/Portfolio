export interface BlogPost {
  title: string;
  url: string;
  description?: string;
  image?: string;
  date?: string;
}

const BLOG_BASE = 'https://blog.jesse-anderson.net';

function absolutize(url: string | undefined): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('//')) return `https:${url}`;
  let cleaned = url;
  if (cleaned.startsWith('./')) cleaned = cleaned.slice(2);
  if (cleaned.startsWith('/')) return `${BLOG_BASE}${cleaned}`;
  return `${BLOG_BASE}/${cleaned}`;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, '').trim();
}

export async function fetchLatestPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${BLOG_BASE}/archive`, {
      headers: { Accept: 'text/html' },
    });

    if (!response.ok) {
      console.error(`[blog] HTTP ${response.status} fetching archive`);
      return [];
    }

    const buffer = await response.arrayBuffer();
    const html = new TextDecoder('utf-8').decode(buffer);

    // Parse table rows from the archive listing (rows with data-index attribute)
    // Each row has: <tr data-index="N"...><td><span class="listing-image"><img src="..."></span></td>
    //              <td><span class="listing-date">...</span></td>
    //              <td><a href="..." class="title listing-title">...</a></td></tr>
    const rowPattern = /<tr\s+data-index="[0-9]+"[^>]*>([\s\S]*?)<\/tr>/g;
    const matches = [...html.matchAll(rowPattern)];

    if (matches.length === 0) {
      return [];
    }

    const posts: BlogPost[] = [];
    for (let i = 0; i < Math.min(matches.length, limit); i++) {
      const match = matches[i];
      const rowHtml = match[1];

      // Extract image from listing-image span
      const imgMatch = rowHtml.match(/<img\s+src="([^"]+)"/);

      // Extract date from listing-date span
      const dateMatch = rowHtml.match(/class="listing-date">([\s\S]*?)<\/span>/);

      // Extract title and URL from listing-title link - match the full <a> tag
      const titleMatch = rowHtml.match(/<a\s+href="([^"]+)"[^>]*class="[^"]*listing-title[^"]*"[^>]*>([\s\S]*?)<\/a>/);

      if (!titleMatch) continue;

      const url = absolutize(titleMatch[1]);
      const title = decodeEntities(stripTags(titleMatch[2]));

      if (!url || !title) {
        continue;
      }

      posts.push({
        title,
        url,
        description: undefined,
        image: imgMatch ? absolutize(imgMatch[1]) : undefined,
        date: dateMatch ? decodeEntities(stripTags(dateMatch[1])) : undefined,
      });
    }

    return posts;
  } catch (err) {
    console.error('[blog] fetch failed', err);
    return [];
  }
}

export const BLOG_URL = BLOG_BASE;
