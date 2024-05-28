import { PerSolution } from "@/components/solutions/PerSolution";
import { allSolutions } from "@/data/solutions";

export default async function PerSolutionPage({ params }) {
  return <PerSolution params={params.slug} />;
}

export async function generateMetadata({ params }) {
  if (params?.slug in allSolutions) return allSolutions[params?.slug].metadata;
}
