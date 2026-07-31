"use client";

import { motion } from "framer-motion";
import {
  BadgePercent,
  Banknote,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { waLink } from "@/lib/business";

const SERVICES = [
  {
    icon: Banknote,
    title: "Buy",
    desc: "Genuine new & used phones, laptops and accessories with the best price in town.",
    action: "Browse Stock",
    href: "#inventory",
  },
  {
    icon: RefreshCcw,
    title: "Sell",
    desc: "Get a fair, instant cash valuation for your old device. Money in hand on the spot.",
    action: "Sell My Device",
    href: waLink("Hello Zero Point! I want to sell my device."),
    external: true,
  },
  {
    icon: BadgePercent,
    title: "Exchange",
    desc: "Old phone? Trade it in for a new one and pay only the difference — no hassle.",
    action: "Get Exchange Quote",
    href: waLink("Hello Zero Point! I want an exchange quote."),
    external: true,
  },
];

export default function Offers() {
  return (
    <section id="offers" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            Why Zero Point
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Buy, Sell &amp; <span className="text-gradient">Exchange</span> —
            All in One Place
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass group flex flex-col rounded-3xl p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-violet-500/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {service.desc}
                </p>
                {service.external ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                  >
                    {service.action} →
                  </a>
                ) : (
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                  >
                    {service.action} →
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong mt-8 flex flex-col items-center gap-4 rounded-3xl p-6 text-center sm:flex-row sm:text-left"
        >
          <ShieldCheck className="h-10 w-10 shrink-0 text-emerald-500" />
          <div className="flex-1">
            <h3 className="text-base font-bold">
              Every device is checked, tested &amp; guaranteed
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              From original IMEI checks to battery health reports — trust your
              next purchase to the most reliable mobile exchange in Mymensingh.
            </p>
          </div>
          <a
            href={waLink("Hello Zero Point! I'd like to know more about your guarantee.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.03] active:scale-95"
          >
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
