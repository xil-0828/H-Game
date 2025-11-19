export const runtime = 'edge';
import { Flex, Box } from "@chakra-ui/react";
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
  const Content = game.Content;
  return (
    

    <Flex mx={120}>
      <Box flex="0.6">

      </Box>

      <Box flex="6" bg="white" m={5} mr={0}
      p={6}
      borderRadius="md" >
        <h1>{game.title}</h1>
      </Box>

      {/* 右エリア（サイドバー） */}
      <Box flex="3">
        <Content />
      </Box>
    </Flex>
  );
}
