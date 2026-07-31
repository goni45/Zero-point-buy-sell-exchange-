"use client";

import { motion } from "framer-motion";
import { Search, Smartphone, Laptop, Cable } from "lucide-react";
import type { Category, Condition } from "@/lib/types";

export type CategoryFilterValue = "All" | Category;

interface CategoryFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: CategoryFilterValue;
  onCategoryChange: (value: CategoryFilterValue) => void;
  condition: "All" | Condition;
  onConditionChange: (value: "All" | Condition) => void;
  resultCount: number;
}

const CATEGORY_TABS: { value: CategoryFilterValue; label: string; icon: typeof Smartphone }[] = [
  { value: "All", label: "All", icon: Smartphone },
  { value: "Phones", label: "Phones", icon: Smartphone },
  { value: "Accessories", label: "Accessories", icon: Cable },
  { value: "Laptops", label: "Laptops", icon: Laptop },
];

const CONDITION_TABS: ("All" | Condition)[] = ["All", "New", "Used"];

export default function CategoryFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  condition,
  onConditionChange,
  resultCount,
}: CategoryFilterProps) {
  return (
    <div className="glass-strong sticky top-24 z-30 rounded-3xl p-4 shadow-glow sm:p-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search iPhones, Samsung, AirPods…"
              className="w-full rounded-2xl border border-white/50 bg-white/50 py-3 pl-11 pr-4 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-brand focus:bg-white/80 focus:ring-4 focus:ring-brand/15 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
            />
          </div>

          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {resultCount} product{resultCount === 1 ? "" : "s"} in stock
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-1.5 rounded-2xl border border-white/50 bg-white/40 p-1.5 dark:border-white/10 dark:bg-white/5">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = category === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => onCategoryChange(tab.value)}
                  className={`relative inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                    isActive
                      ? "text-white"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="category-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand to-brand-deep shadow-lg shadow-violet-500/25"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-1.5 rounded-2xl border border-white/50 bg-white/40 p-1.5 dark:border-white/10 dark:bg-white/5">
            {CONDITION_TABS.map((c) => {
              const isActive = condition === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => onConditionChange(c)}
                  className={`relative inline-flex items-center rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                    isActive
                      ? "text-white"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="condition-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{c}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
