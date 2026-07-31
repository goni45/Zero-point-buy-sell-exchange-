import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p1",
    title: "iPhone 14 Pro Max — 256GB Deep Purple",
    slug: "iphone-14-pro-max-256gb-deep-purple",
    price: 149000,
    condition: "Used",
    category: "Phones",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
    description:
      "Flagship A16 Bionic performance with a 48MP Pro camera system. Battery health 92%, flawless screen, box not available.",
    isFeatured: true,
  },
  {
    id: "p2",
    title: "Samsung Galaxy S24 Ultra — 512GB Titanium Gray",
    slug: "samsung-galaxy-s24-ultra-512gb-titanium-gray",
    price: 168000,
    condition: "New",
    category: "Phones",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
    description:
      "Brand new, sealed. Galaxy AI, 200MP camera and a built-in S Pen. Full official warranty.",
    isFeatured: true,
  },
  {
    id: "p3",
    title: "iPhone 13 — 128GB Midnight",
    slug: "iphone-13-128gb-midnight",
    price: 72000,
    condition: "Used",
    category: "Phones",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
    description:
      "Great condition, 89% battery health, no scratches on the display. Includes fast charger.",
    isFeatured: false,
  },
  {
    id: "p4",
    title: "Xiaomi Redmi Note 13 Pro+ — 512GB Black",
    slug: "xiaomi-redmi-note-13-pro-plus-512gb-black",
    price: 45000,
    condition: "New",
    category: "Phones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    description:
      "Brand new with 1 year warranty. 200MP camera and 120W HyperCharge fast charging.",
    isFeatured: true,
  },
  {
    id: "p5",
    title: 'MacBook Air M2 — 13" 8/256GB Space Gray',
    slug: "macbook-air-m2-13-8-256gb-space-gray",
    price: 158000,
    condition: "New",
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    description:
      "Sealed unit. Apple M2 chip with MagSafe, up to 18 hours of battery life. Official warranty.",
    isFeatured: false,
  },
  {
    id: "p6",
    title: "Apple AirPods Pro 2 — USB-C",
    slug: "apple-airpods-pro-2-usb-c",
    price: 29500,
    condition: "New",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80",
    description:
      "Sealed. Active Noise Cancellation, Adaptive Audio and USB-C charging case.",
    isFeatured: true,
  },
  {
    id: "p7",
    title: "Anker 65W GaN Fast Charger + USB-C Cable",
    slug: "anker-65w-gan-fast-charger-usb-c-cable",
    price: 3200,
    condition: "New",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
    description:
      "Compact GaN charger with 2x USB-C and 1x USB-A. Charges laptop and phone simultaneously.",
    isFeatured: false,
  },
  {
    id: "p8",
    title: "Dell Latitude 7420 — i7/16GB/512GB",
    slug: "dell-latitude-7420-i7-16gb-512gb",
    price: 98000,
    condition: "Used",
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80",
    description:
      "Business-grade Ultrabook, 11th Gen Intel i7, 16GB RAM. Excellent battery, minimal usage marks.",
    isFeatured: false,
  },
];
