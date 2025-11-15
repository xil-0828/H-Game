"use client";

import { Box, Grid, Text, Stack, AspectRatio } from "@chakra-ui/react";
import NextImage from "next/image";   // ← 追加（Next.js の Image）

const items = [
  {
    title: "Chakra UI Pro",
    subtitle: "Featured",
    img: "/images/thumbnails/MesugakiWakaraseTap.webp",
  },
  {
    title: "Vimeo",
    subtitle: "Video platform",
    img: "/images/thumbnails/MesugakiWakaraseTap.webp",
  },
  {
    title: "Udacity",
    subtitle: "EdTech platform",
    img: "/images/thumbnails/MesugakiWakaraseTap.webp",
  },
  {
    title: "Suno",
    subtitle: "AI Music",
    img: "/images/thumbnails/MesugakiWakaraseTap.webp",
  },
];

export default function Page() {
  return (
    <Box
      p={{
        base: 8,
        sm: 12,
        md: 20,
        lg: 28,
        xl: 36,
      }}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {items.map((item, i) => (
          <Box key={i} w="100%">

            {/* ★ sankou と同じ比率（1.15） */}
            <AspectRatio ratio={400 / 350} w="100%">
              <Box
                position="relative"
                overflow="hidden"
                borderRadius="15px"
              >
                <NextImage
                  src={item.img}
                  alt={item.title}
                  fill
                  unoptimized

                  style={{ objectFit: "cover" }}
                />
              </Box>
            </AspectRatio>
            <Stack pt={2} spacing={0.5}>
              <Text fontSize="lg" fontWeight="semibold">
                {item.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {item.subtitle}
              </Text>
            </Stack>

          </Box>
        ))}
      </Grid>
    </Box>
  );
}
