import type { GetAllProductsQueryResult } from "../sanity.types";

import { urlFor } from "./sanity.client";
import type { Product } from "./types";

type ProductProjection = GetAllProductsQueryResult[number];

function portableTextToText(blocks: ProductProjection["description"]): string {
  if (!blocks) return "";
  return blocks
    .map((block) =>
      "children" in block
        ? (block.children ?? []).map((child) => child.text ?? "").join("")
        : "",
    )
    .filter(Boolean)
    .join("\n");
}

export function toFrontendProduct(source: ProductProjection): Product {
  return {
    id: source._id,
    title: source.title ?? "Untitled product",
    slug: source.slug?.current ?? "",
    price: source.price ?? 0,
    condition: source.condition ?? "Used",
    category: (source.category?.title as Product["category"]) ?? "Phones",
    image: source.mainImage
      ? urlFor(source.mainImage).width(900).format("jpg").url()
      : "",
    description: portableTextToText(source.description),
    isFeatured: source.isFeatured ?? false,
  };
}

export function toFrontendProducts(
  sources: GetAllProductsQueryResult,
): Product[] {
  return sources.map(toFrontendProduct);
}
