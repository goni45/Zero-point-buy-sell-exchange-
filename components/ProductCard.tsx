"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { formatBDT, waLink } from "@/lib/business";

const CATEGORY_EMOJI: Record<Product["category"], string> = {
  Phones: "📱",
  Accessories: "🔌",
  Laptops: "💻",
};

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const waMessage = `Hi Zero Point! I'm interested in the "${product.title}" priced at ${formatBDT(
    product.price,
  )} (${product.condition}). Is it still available?`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
      whileHover={{ y: -6 }}
      className="glass group relative flex flex-col overflow-hidden rounded-3xl shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-violet-500/15"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute left-3 top-3 flex gap-2">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-md ${
              product.condition === "New"
                ? "bg-emerald-500"
                : product.condition === "Refurbished"
                  ? "bg-sky-500"
                  : "bg-amber-500"
            }`}
          >
            {product.condition === "New" ? "New" : product.condition === "Refurbished" ? "Refurbished" : "Used"}
          </span>
          {product.isFeatured && (
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-brand shadow-md backdrop-blur">
              ★ Featured
            </span>
          )}
        </div>

        <span className="absolute right-3 top-3 rounded-full bg-zinc-900/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
          {CATEGORY_EMOJI[product.category]} {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[15px] font-bold leading-snug text-zinc-900 dark:text-zinc-50">
          {product.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              Price
            </p>
            <p className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {formatBDT(product.price)}
            </p>
          </div>
          <span className="mb-1 grid h-9 w-9 place-items-center rounded-xl border border-white/50 bg-white/50 text-zinc-400 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:border-white/10 dark:bg-white/5">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2.5 text-xs font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:brightness-105 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="tel:01684377617"
            className="glass-strong inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold text-zinc-800 transition-all active:scale-95 dark:text-zinc-100"
          >
            <Phone className="h-4 w-4 text-brand" />
            Call Shop
          </a>
        </div>
      </div>
    </motion.article>
  );
}
