"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PackageSearch } from "lucide-react";
import { products } from "@/lib/products";
import type { Product } from "@/lib/types";
import CategoryFilter, {
  type CategoryFilterValue,
} from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilterValue>("All");
  const [condition, setCondition] = useState<"All" | Product["condition"]>("All");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((p) => {
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query);
      const matchCategory = category === "All" || p.category === category;
      const matchCondition = condition === "All" || p.condition === condition;
      return matchQuery && matchCategory && matchCondition;
    });
  }, [search, category, condition]);

  return (
    <section id="inventory" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            Current Inventory
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Fresh Stock, <span className="text-gradient">Honest Prices</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
            Every device is hand-checked by our experts. Tap WhatsApp on any
            card to confirm stock and get today&apos;s best price instantly.
          </p>
        </motion.div>

        <CategoryFilter
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          condition={condition}
          onConditionChange={setCondition}
          resultCount={filtered.length}
        />

        <motion.div layout className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass mt-8 flex flex-col items-center gap-3 rounded-3xl px-6 py-16 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand/10 text-brand">
              <PackageSearch className="h-8 w-8" />
            </span>
            <h3 className="text-lg font-bold">No products match your filters</h3>
            <p className="max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
              Try a different keyword, or message us on WhatsApp — we stock much
              more than what is listed here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
