import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "eybo9h9q",
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: true,
});
