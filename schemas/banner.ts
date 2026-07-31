import { defineField, defineType } from "sanity";

export const banner = defineType({
  name: "banner",
  title: "Offer / Hero Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "e.g. Change Your Phone Now!",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Promotional copy supporting the title.",
    }),
    defineField({
      name: "offerTag",
      title: "Offer Tag",
      type: "string",
      description: "e.g. Eid Special, Exchange Bonus",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Get Offer",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      description: "Optional URL or internal route, e.g. /products or https://wa.me/8801...",
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Only active banners are returned by the hero query.",
      initialValue: true,
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower values appear first in the hero slider.",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Sort Order, Ascending",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      offerTag: "offerTag",
      media: "image",
    },
    prepare(selection) {
      const { title, offerTag, media } = selection;
      return {
        title: title ?? "Untitled banner",
        subtitle: offerTag ?? "—",
        media,
      };
    },
  },
});
