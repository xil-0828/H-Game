import { games } from "@/app/data/games";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const game = games[slug as keyof typeof games];
  if (!game) return {};

  return {
    title: `${game.title} | Almond Games`,
    description: game.description,
  };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = games[slug as keyof typeof games];
  if (!game) return notFound();

  return (
    <main style={{ padding: "3rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>{game.title}</h1>
      <p style={{ color: "#777" }}>{game.date}</p>
      <p style={{ marginTop: "1rem" }}>{game.description}</p>
    </main>
  );
}
