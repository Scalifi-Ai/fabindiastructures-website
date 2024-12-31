import { PerProduct } from "@/components/products/PerProduct";
import { allProducts } from "@/data/products";

export default async function PerProductPage({ params }) {
  return <PerProduct params={params.slug} />;
}

export async function generateMetadata({ params }) {
  if (params?.slug in allProducts) return allProducts[params?.slug].metadata;
}
