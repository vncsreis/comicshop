import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function ComicCard() {
  return (
    <Flex flexDir="column" alignItems="center">
      <Box height="250px" width="200px" backgroundColor="gray.400" />
      <Flex flexDir="column" alignItems="center" mt="2">
        <Heading fontSize="2xl">Comic Title</Heading>
        <Text fontSize="xl">$50,00</Text>
      </Flex>
    </Flex>
  );
}
