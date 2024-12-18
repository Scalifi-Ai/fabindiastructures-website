import { Solutions } from "@/components/solutions/Solutions";
import { solutions } from "@/data/solutions";

export const metadata = solutions.metadata;

export default function SolutionHome() {
  return (
    <>
      <Solutions />
    </>
  );
}
