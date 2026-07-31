import { defineQuery } from "groq";

export const getAllProductsQuery = defineQuery(`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    price,
    originalPrice,
    condition,
    category->{ _id, title, slug },
    mainImage,
    gallery,
    description,
    isFeatured,
    inStock
  }
`);

export const getFeaturedProductsQuery = defineQuery(`
  *[_type == "product" && isFeatured == true] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    price,
    originalPrice,
    condition,
    category->{ _id, title, slug },
    mainImage,
    gallery,
    description,
    isFeatured,
    inStock
  }
`);

export const getProductsByCategoryQuery = defineQuery(`
  *[_type == "product" && category->slug.current == $slug] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    price,
    originalPrice,
    condition,
    category->{ _id, title, slug },
    mainImage,
    gallery,
    description,
    isFeatured,
    inStock
  }
`);

export const getSingleProductQuery = defineQuery(`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    price,
    originalPrice,
    condition,
    category->{ _id, title, slug },
    mainImage,
    gallery,
    description,
    isFeatured,
    inStock
  }
`);

export const getCategoriesQuery = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    _createdAt,
    title,
    slug,
    image,
    description
  }
`);

export const getHeroBannersQuery = defineQuery(`
  *[_type == "banner" && isActive == true] | order(sortOrder asc) {
    _id,
    _createdAt,
    title,
    subtitle,
    offerTag,
    image,
    buttonText,
    link,
    isActive,
    sortOrder
  }
`);

export const getSiteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    shopName,
    phone,
    whatsapp,
    address,
    facebook
  }
`);
