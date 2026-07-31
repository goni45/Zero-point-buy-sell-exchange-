import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "e.g. iPhone 13 Pro Max",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (BDT)",
      type: "number",
      description: "Selling price in Bangladeshi Taka.",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "originalPrice",
      title: "Original Price (BDT)",
      type: "number",
      description: "Higher reference price used to show the discount / savings amount.",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "condition",
      title: "Condition",
      type: "string",
      initialValue: "Used",
      options: {
        list: [
          { title: "New", value: "New" },
          { title: "Used", value: "Used" },
          { title: "Refurbished", value: "Refurbished" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Link to a Category document (Mobile, Laptop, Accessories, etc.).",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
      options: { layout: "grid" },
    }),
    defineField({
      name: "description",
      title: "Description & Specifications",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text for description and key specs.",
    }),
    defineField({
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
      description: "Showcase in the hero carousel or featured section.",
      initialValue: false,
    }),
    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Price, Low to High",
      name: "priceAsc",
      by: [{ field: "price", direction: "asc" }],
    },
    {
      title: "Price, High to Low",
      name: "priceDesc",
      by: [{ field: "price", direction: "desc" }],
    },
    {
      title: "Newest First",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      condition: "condition",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, price, condition, media } = selection;
      return {
        title: title ?? "Untitled product",
        subtitle: price != null ? `${condition ?? "—"} · ৳${price}` : condition ?? "—",
        media,
      };
    },
  },
});
