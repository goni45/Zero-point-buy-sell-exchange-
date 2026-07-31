import type { StructureBuilder } from "sanity/structure";

const singleton = (S: StructureBuilder, id: string, title: string) =>
  S.listItem()
    .id(id)
    .title(title)
    .child(S.editor().id(id).schemaType(id).documentId(id));

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "siteSettings", "Site Settings"),
      S.divider(),
      S.documentTypeListItem("product").title("Products"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("banner").title("Offer / Hero Banners"),
    ]);
