import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { structure } from "./lib/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Zero Point Buy Sell Exchange",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "missing-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
