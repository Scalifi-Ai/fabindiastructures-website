import { Products } from "@/components/products/Products";
import { whatsNew } from "@/data/products";

export const metadata = whatsNew.metadata;

export default function SolutionHome() {
  return (
    <>
      <Products />
    </>
  );
}
