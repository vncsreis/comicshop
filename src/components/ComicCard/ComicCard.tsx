import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface ComicCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

export default function ComicCard({
  id,
  title,
  imageUrl,
  price,
}: ComicCardProps) {
  return (
    <Flex flexDir="column" alignItems="center">
      <Box backgroundColor="gray.400">
        <Image maxHeight="400px" src={imageUrl} alt={`${id}'s cover`} />
      </Box>
      <Flex flexDir="column" alignItems="center" mt="2">
        <Heading fontSize="xl" textAlign="center">
          {title}
        </Heading>
        <Text fontSize="2xl">
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Text>
      </Flex>
    </Flex>
  );
}
