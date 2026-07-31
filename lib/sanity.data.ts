import "server-only";

import type {
  GetAllProductsQueryResult,
  GetCategoriesQueryResult,
  GetFeaturedProductsQueryResult,
  GetHeroBannersQueryResult,
  GetProductsByCategoryQueryResult,
  GetSingleProductQueryResult,
  GetSiteSettingsQueryResult,
} from "../sanity.types";
import { sanityFetch } from "./sanity.fetch";
import {
  getAllProductsQuery,
  getCategoriesQuery,
  getFeaturedProductsQuery,
  getHeroBannersQuery,
  getProductsByCategoryQuery,
  getSingleProductQuery,
  getSiteSettingsQuery,
} from "./sanity.queries";

export async function getProducts(): Promise<GetAllProductsQueryResult> {
  return sanityFetch({ query: getAllProductsQuery });
}

export async function getFeaturedProducts(): Promise<GetFeaturedProductsQueryResult> {
  return sanityFetch({ query: getFeaturedProductsQuery });
}

export async function getProductsByCategory(
  slug: string,
): Promise<GetProductsByCategoryQueryResult> {
  return sanityFetch({ query: getProductsByCategoryQuery, params: { slug } });
}

export async function getProduct(slug: string): Promise<GetSingleProductQueryResult> {
  return sanityFetch({ query: getSingleProductQuery, params: { slug } });
}

export async function getCategories(): Promise<GetCategoriesQueryResult> {
  return sanityFetch({ query: getCategoriesQuery });
}

export async function getBanners(): Promise<GetHeroBannersQueryResult> {
  return sanityFetch({ query: getHeroBannersQuery });
}

export async function getSiteSettings(): Promise<GetSiteSettingsQueryResult> {
  return sanityFetch({ query: getSiteSettingsQuery });
}
