import { PerProduct } from "@/components/products/PerProduct";

export default async function PerSolutionPage({ params }) {
  return <PerProduct params={params.slug} />;
}
