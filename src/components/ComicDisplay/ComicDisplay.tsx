import { Box, Divider, Flex, Heading, Image } from '@chakra-ui/react';
import { AiOutlineShopping } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import ComicModel from '../../models/Comic';
import Button from '../Button';

interface ComicProps {
  comic: ComicModel;
  onAdd: () => void;
}

export default function ComicDisplay({ comic, onAdd }: ComicProps) {
  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <Flex
        shadow="2xl"
        height="90%"
        width="80%"
        alignItems="center"
        padding="24"
      >
        <Flex
          flexShrink={0}
          flexGrow={0}
          height="100%"
          position="relative"
          justifyContent="center"
          alignItems="center"
        >
          {comic.rare && (
            <Box
              zIndex="1"
              position="absolute"
              top="0"
              right="11%"
              backgroundColor="red"
              color="white"
              padding="4"
            >
              <FaStar size="30" />
            </Box>
          )}
          <Image
            height="100%"
            src={comic.imageUrl}
            border={comic.rare ? 'solid 5px red' : ''}
          />
        </Flex>
        <Divider orientation="vertical" ml="auto" />
        <Flex height="80%" flexDir="column" alignItems="flex-end" ml="auto">
          <Heading textAlign="right" mb="10">
            {comic.title}
          </Heading>
          <Heading fontSize="5xl">
            {comic.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Heading>

          <Box mt="auto">
            <Button
              text="Add to Bag"
              icon={<AiOutlineShopping size="30" />}
              onClick={onAdd}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
