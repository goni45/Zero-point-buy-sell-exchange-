import "server-only";

import { urlFor } from "@/lib/sanity.client";
import type { Product } from "@/lib/types";
import type {
  GetAllProductsQueryResult,
  GetHeroBannersQueryResult,
} from "@/sanity.types";

type SanityProduct = GetAllProductsQueryResult[number];
type SanityBanner = GetHeroBannersQueryResult[number];

const CATEGORY_ALIASES: Record<string, Product["category"]> = {
  phone: "Phones",
  phones: "Phones",
  mobile: "Phones",
  mobiles: "Phones",
  accessory: "Accessories",
  accessories: "Accessories",
  laptop: "Laptops",
  laptops: "Laptops",
};

function toCategory(value: string | undefined | null): Product["category"] {
  if (!value) return "Phones";
  const key = value.trim().toLowerCase();
  return CATEGORY_ALIASES[key] ?? "Phones";
}

function toCondition(value: string | undefined | null): Product["condition"] {
  if (value === "New") return "New";
  return "Used";
}

function toPlainText(blocks: unknown): string {
  if (typeof blocks === "string") return blocks;
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (
        block &&
        typeof block === "object" &&
        "children" in (block as object) &&
        Array.isArray((block as { children?: unknown[] }).children)
      ) {
        return (block as { children: { text?: string }[] }).children
          .map((child) => child.text ?? "")
          .join("");
      }
      return "";
    })
    .filter(Boolean)
    .join(" ");
}

export function mapSanityProduct(product: SanityProduct): Product {
  const image = product.mainImage
    ? urlFor(product.mainImage).width(900).quality(80).url()
    : "";

  return {
    id: product._id,
    title: product.title ?? "Untitled product",
    slug: product.slug?.current ?? product._id,
    price: product.price ?? 0,
    condition: toCondition(product.condition),
    category: toCategory(product.category?.title),
    image,
    description: toPlainText(product.description),
    isFeatured: product.isFeatured ?? false,
  };
}

export interface HeroBanner {
  id: string;
  label: string;
  title: string;
  sub: string;
  cta: string;
  link: string;
}

export function mapSanityBanner(banner: SanityBanner): HeroBanner {
  return {
    id: banner._id,
    label: banner.offerTag ?? "Special Offer",
    title: banner.title ?? "Special Offer",
    sub: banner.subtitle ?? "",
    cta: banner.buttonText ?? "Get Offer",
    link: banner.link ?? "",
  };
}
