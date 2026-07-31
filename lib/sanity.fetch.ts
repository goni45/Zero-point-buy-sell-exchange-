import "server-only";

import { client } from "./sanity.client";

const DEFAULT_REVALIDATE = 60;

type SanityFetchParams = {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
  revalidate?: number;
};

export async function sanityFetch<QueryResponse>({
  query,
  params,
  tags,
  revalidate = DEFAULT_REVALIDATE,
}: SanityFetchParams): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params ?? {}, {
    next: { revalidate, tags },
  });
}
