export interface Publication {
  title: string;
  journal?: string;
  year?: string;
  doi?: string;
  url?: string;
  type?: string;
}

const ORCID_ID = '0000-0001-5731-5511';
const ENDPOINT = `https://pub.orcid.org/v3.0/${ORCID_ID}/works`;

interface OrcidExternalId {
  'external-id-type': string;
  'external-id-value': string;
  'external-id-url'?: { value: string } | null;
}

interface OrcidWorkSummary {
  title?: { title?: { value?: string } | null } | null;
  'journal-title'?: { value?: string } | null;
  'publication-date'?: { year?: { value?: string } | null } | null;
  type?: string | null;
  'external-ids'?: { 'external-id'?: OrcidExternalId[] } | null;
}

interface OrcidGroup {
  'work-summary'?: OrcidWorkSummary[];
  'external-ids'?: { 'external-id'?: OrcidExternalId[] } | null;
}

interface OrcidWorksResponse {
  group?: OrcidGroup[];
}

function pickWorkSummary(group: OrcidGroup): OrcidWorkSummary | undefined {
  return group['work-summary']?.[0];
}

function findDoi(externalIds?: { 'external-id'?: OrcidExternalId[] } | null): { doi?: string; url?: string } {
  const ids = externalIds?.['external-id'] ?? [];
  const doi = ids.find((id) => id['external-id-type']?.toLowerCase() === 'doi');
  if (!doi) return {};
  return {
    doi: doi['external-id-value'],
    url: doi['external-id-url']?.value ?? `https://doi.org/${doi['external-id-value']}`,
  };
}

export async function fetchPublications(): Promise<Publication[]> {
  try {
    const response = await fetch(ENDPOINT, {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
      console.warn(`[orcid] HTTP ${response.status} fetching works`);
      return [];
    }
    const data = (await response.json()) as OrcidWorksResponse;
    const groups = data.group ?? [];

    const pubs: Publication[] = [];
    for (const group of groups) {
      const summary = pickWorkSummary(group);
      if (!summary) continue;
      const title = summary.title?.title?.value;
      if (!title) continue;
      const type = summary.type ?? undefined;
      if (type && type !== 'journal-article') continue;
      const { doi, url } = findDoi(summary['external-ids'] ?? group['external-ids']);
      pubs.push({
        title,
        journal: summary['journal-title']?.value ?? undefined,
        year: summary['publication-date']?.year?.value ?? undefined,
        type,
        doi,
        url,
      });
    }

    pubs.sort((a, b) => {
      const ay = parseInt(a.year ?? '0', 10);
      const by = parseInt(b.year ?? '0', 10);
      return by - ay;
    });

    return pubs;
  } catch (err) {
    console.warn('[orcid] fetch failed', err);
    return [];
  }
}

export const ORCID_URL = `https://orcid.org/${ORCID_ID}`;
