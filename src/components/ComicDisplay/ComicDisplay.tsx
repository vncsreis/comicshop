import { Flex, Heading, Image } from '@chakra-ui/react';
import ComicModel from '../../models/Comic';

interface ComicProps {
  comic: ComicModel;
}

export default function ComicDisplay({ comic }: ComicProps) {
  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <Image src={comic.imageUrl} height="70%" />
      <Flex height="50%" flexDir="column" alignItems="flex-end">
        <Heading>{comic.title}</Heading>
        <Heading fontSize="3xl">
          {comic.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Heading>
      </Flex>
    </Flex>
  );
}
