import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "shopName",
      title: "Shop Name",
      type: "string",
      description: "e.g. Zero Point Buy Sell Exchange",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      description: "Display number, e.g. +880 1712-345678",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      description: "Full number with country code for wa.me links, e.g. 8801712345678",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
});
