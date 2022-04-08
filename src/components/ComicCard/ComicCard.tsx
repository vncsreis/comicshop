import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface ComicCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  rare: boolean;
}

export default function ComicCard({
  id,
  title,
  imageUrl,
  price,
  rare,
}: ComicCardProps) {
  return (
    <Link to={`/comic/${id}`}>
      <Flex flexDir="column" alignItems="center">
        <Box backgroundColor="gray.400" position="relative">
          {rare && (
            <Box
              zIndex="1"
              position="absolute"
              top="0"
              right="0"
              backgroundColor="red"
              color="white"
              padding="1"
            >
              <Text fontSize="3xl">Rare!</Text>
            </Box>
          )}
          <Image
            border={rare ? 'solid 5px red' : ''}
            maxHeight="400px"
            src={imageUrl}
            alt={`${id}'s cover`}
          />
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
    </Link>
  );
}
