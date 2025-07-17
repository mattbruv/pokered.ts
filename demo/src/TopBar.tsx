import { Box, Flex, Text, Anchor, Tooltip } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

export default function PokeredTopBar() {
  return (
    <Box w="100%" bg="gray.1" h={50} px="md">
      <Flex align="center" justify="space-between" h="100%">
        <Text fw={500}>pokered.ts</Text>
        <Anchor
          href="https://github.com/mattbruv/pokered.ts"
          target="_blank"
          underline="hover"
        >
          <Flex align="center" gap={4}>
            <Tooltip label="Source Code">
              <IconBrandGithub color="black" size={28} />
            </Tooltip>
          </Flex>
        </Anchor>
      </Flex>
    </Box>
  );
}
