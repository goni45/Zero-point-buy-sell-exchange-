"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Play,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { BUSINESS, googleMapsEmbed } from "@/lib/business";

const SERVICES_LINKS = [
  "Phone Buy & Sell",
  "Device Exchange",
  "Trade-in Bonus",
  "Laptop & Accessories",
  "Repair Support",
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 px-4 pb-8 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong overflow-hidden rounded-3xl shadow-glow"
        >
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_1fr_1fr_1.2fr]">
            <div>
              <Link href="#home" className="flex items-center gap-2.5">
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
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {BUSINESS.tagline} — the most trusted destination for mobile
                phones, laptops and accessories in Mymensingh.
              </p>
              <div className="mt-5 flex gap-2.5">
                <a
                  href={BUSINESS.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook page"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/50 bg-white/40 text-zinc-600 transition-transform hover:scale-110 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                >
                  <Facebook className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={BUSINESS.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube channel"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/50 bg-white/40 text-zinc-600 transition-transform hover:scale-110 hover:text-red-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                >
                  <Play className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={BUSINESS.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok profile"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/50 bg-white/40 text-zinc-600 transition-transform hover:scale-110 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                >
                  <Music2 className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  aria-label="Send email"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/50 bg-white/40 text-zinc-600 transition-transform hover:scale-110 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                >
                  <Mail className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-100">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {SERVICES_LINKS.map((label) => (
                  <li key={label}>
                    <Link
                      href="#offers"
                      className="text-sm text-zinc-500 transition-colors hover:text-brand dark:text-zinc-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-100">
                Contact
              </h3>
              <ul className="mt-4 space-y-3.5 text-sm text-zinc-500 dark:text-zinc-400">
                <li className="flex gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="transition-colors hover:text-brand"
                  >
                    {BUSINESS.phone}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <a
                    href={`https://wa.me/${BUSINESS.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-emerald-500"
                  >
                    {BUSINESS.whatsappDisplay}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="break-all transition-colors hover:text-brand"
                  >
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="leading-relaxed">{BUSINESS.address.full}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-100">
                Shop Hours
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {BUSINESS.hours.map((slot) => (
                  <li
                    key={slot.days}
                    className="flex items-start gap-2.5 text-zinc-500 dark:text-zinc-400"
                  >
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>
                      <span className="block font-medium text-zinc-700 dark:text-zinc-200">
                        {slot.days}
                      </span>
                      {slot.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-[260px] w-full border-t border-white/40 dark:border-white/10">
            <iframe
              src={googleMapsEmbed}
              title="Zero Point Buy Sell Exchange location map"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/40 px-7 py-5 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400 sm:flex-row sm:px-10">
            <p>
              © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              <Instagram className="h-3.5 w-3.5" />
              Made with care in Mymensingh, Bangladesh
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
