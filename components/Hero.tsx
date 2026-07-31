"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgePercent,
  Gift,
  Phone,
  RefreshCcw,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { waLink } from "@/lib/business";
import type { HeroBanner } from "@/lib/sanity.mapper";

interface DefaultOffer {
  icon: typeof BadgePercent;
  label: string;
  title: string;
  sub: string;
  cta: string;
}

const DEFAULT_OFFERS: DefaultOffer[] = [
  {
    icon: BadgePercent,
    label: "Special Offer",
    title: "Extra Trade-In Bonus this week",
    sub: "Up to ৳8,000 bonus on your old phone",
    cta: "Get Quote",
  },
  {
    icon: RefreshCcw,
    label: "Exchange Bonus",
    title: "Old to New Exchange Program",
    sub: "Smartphone, laptop & accessories accepted",
    cta: "Start Exchange",
  },
  {
    icon: Gift,
    label: "New Arrivals",
    title: "Fresh Sealed Stock every Friday",
    sub: "iPhones, Samsung & Xiaomi flagships",
    cta: "Browse Deals",
  },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1400&q=85";

export default function Hero({ banners = [] }: { banners?: HeroBanner[] }) {
  const [active, setActive] = useState(0);

  const offers: (DefaultOffer & { icon: typeof BadgePercent })[] =
    banners.length > 0
      ? banners.map((banner, i) => {
          const icons = [BadgePercent, RefreshCcw, Gift] as const;
          return {
            icon: icons[i % icons.length],
            label: banner.label,
            title: banner.title,
            sub: banner.sub,
            cta: banner.cta,
          };
        })
      : DEFAULT_OFFERS;

  useEffect(() => {
    const id = setInterval(
      () => setActive((v) => (v + 1) % offers.length),
      5000,
    );
    return () => clearInterval(id);
  }, [offers.length]);

  const offer = useMemo(() => offers[active], [offers, active]);
  const OfferIcon = offer.icon;

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-brand/25 to-brand-soft/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-emerald-400/20 to-sky-400/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-deep dark:text-brand-soft"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Trusted in Mymensingh since day one
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Change Your
            <span className="text-gradient"> Phone</span> Now!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300"
          >
            The best <strong>Buy, Sell &amp; Exchange</strong> deals in
            Mymensingh. Genuine iPhones, Android flagships, laptops and
            accessories — with honest prices and instant WhatsApp support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#inventory"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand to-brand-deep px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/25 transition-transform hover:scale-[1.03] active:scale-95"
            >
              Browse Inventory
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={waLink(
                "Hello Zero Point! I want an instant exchange quote for my phone.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-strong inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-zinc-800 transition-transform hover:scale-[1.03] active:scale-95 dark:text-zinc-100"
            >
              <RefreshCcw className="h-4 w-4 text-emerald-500" />
              Instant Exchange Quote
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-strong relative overflow-hidden rounded-3xl p-3 shadow-glow">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Latest smartphones and accessories at Zero Point Buy Sell Exchange"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
              <div className="glass absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-100">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                100% Genuine Stock
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        <div className="glass-strong flex flex-col gap-4 rounded-3xl p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-h-[64px] flex-1 items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-lg shadow-violet-500/25">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                >
                  <OfferIcon className="h-6 w-6" />
                </motion.span>
              </AnimatePresence>
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="min-w-0"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand">
                  {offer.label}
                </p>
                <p className="truncate text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                  {offer.title}
                </p>
                <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                  {offer.sub}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <a
              href={waLink(`Hi! I am interested in: ${offer.title} (${offer.sub})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.03]"
            >
              {offer.cta}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <div className="flex gap-1.5">
              {offers.map((o, i) => (
                <button
                  key={o.label}
                  type="button"
                  aria-label={`Show offer: ${o.title}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-7 bg-gradient-to-r from-brand to-brand-soft"
                      : "w-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
