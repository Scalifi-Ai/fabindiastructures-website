import { PerSolution } from "@/components/solutions/PerSolution";

export default async function PerSolutionPage({ params }) {
  return <PerSolution params={params.slug} />;
}
