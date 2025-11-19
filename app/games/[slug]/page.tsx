export const runtime = 'edge';
import { Flex, Box, Text, Image} from "@chakra-ui/react";
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
        <Box
          m={5}
          p={3}
          px={6}

          bg="#fac4d4ff"
          borderRadius="md"

          display="flex"
          alignItems="center"
          gap={4}
        >
          {/* 左の丸角画像 */}
          <Box
            w="70px"
            h="66px"
            borderRadius="md"
            overflow="hidden"
            flexShrink={0}
            bg="#FFF"
            display="flex" justifyContent="center" alignItems="center"
          >
            <Image
              src="/images/icons/wakarase-tap1.webp"
              alt="icon"
              w="90%"
              h="90%"
              objectFit="cover"
            />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white">
            全画面ページへ
          </Text>
        </Box>

        <Content />
      </Box>
    </Flex>
  );
}
// #FD90AC