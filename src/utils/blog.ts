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
    const response = await fetch(BLOG_BASE, {
      headers: { Accept: 'text/html' },
    });
    if (!response.ok) {
      console.warn(`[blog] HTTP ${response.status} fetching listing`);
      return [];
    }
    const buffer = await response.arrayBuffer();
    const html = new TextDecoder('utf-8').decode(buffer);

    const postBlocks = html.match(/<div[^>]*class="[^"]*\bquarto-post\b[^"]*"[\s\S]*?(?=<div[^>]*class="[^"]*\bquarto-post\b|$)/g);
    if (!postBlocks || postBlocks.length === 0) return [];

    const posts: BlogPost[] = [];
    for (const block of postBlocks.slice(0, limit)) {
      const titleMatch = block.match(/<h3[^>]*class="[^"]*listing-title[^"]*"[^>]*>\s*<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
      if (!titleMatch) continue;
      const url = absolutize(titleMatch[1]);
      const title = decodeEntities(stripTags(titleMatch[2]));
      if (!url || !title) continue;

      const descMatch = block.match(/<div[^>]*class="[^"]*listing-description[^"]*"[^>]*>([\s\S]*?)<\/div>/);
      const imgMatch = block.match(/<img[^>]+src="([^"]+)"/);
      const dateMatch = block.match(/<div[^>]*class="[^"]*listing-date[^"]*"[^>]*>([\s\S]*?)<\/div>/);

      posts.push({
        title,
        url,
        description: descMatch ? decodeEntities(stripTags(descMatch[1])).slice(0, 240) : undefined,
        image: absolutize(imgMatch?.[1]),
        date: dateMatch ? decodeEntities(stripTags(dateMatch[1])) : undefined,
      });
    }

    return posts;
  } catch (err) {
    console.warn('[blog] fetch failed', err);
    return [];
  }
}

export const BLOG_URL = BLOG_BASE;
