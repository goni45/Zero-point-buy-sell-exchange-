"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, ShoppingBag, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { BUSINESS, waLink } from "@/lib/business";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Inventory", href: "#inventory" },
  { label: "Buy / Sell / Exchange", href: "#offers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-glow" : "glass"
        }`}
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-lg shadow-violet-500/30">
            <ShoppingBag className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight">
              Zero <span className="text-gradient">Point</span>
            </span>
            <span className="block text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              Buy Sell Exchange
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-white/60 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href={waLink("Hello Zero Point! I have a question about a product.")}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 transition-transform hover:scale-105 dark:text-emerald-400"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-deep px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/40 bg-white/40 text-zinc-800 backdrop-blur-xl md:hidden dark:text-zinc-100"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-strong mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-white/60 dark:text-zinc-200 dark:hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2 border-t border-white/40 pt-3 dark:border-white/10">
                <ThemeToggle />
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-deep px-4 py-3 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> Call Shop
                </a>
                <a
                  href={waLink("Hello Zero Point! I have a question.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
