import { AboutsUs } from "@/components/about/AboutsUs";
import { whatsNew } from "@/data/products";

export const metadata = whatsNew.metadata;

export default function SolutionHome() {
  return (
    <>
      <AboutsUs />
    </>
  );
}
