import { Flex, Heading, Image, Divider } from '@chakra-ui/react';
import { AiOutlineShopping } from 'react-icons/ai';
import ComicModel from '../../models/Comic';
import Button from '../Button';

interface ComicProps {
  comic: ComicModel;
}

export default function ComicDisplay({ comic }: ComicProps) {
  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <Flex
        shadow="dark-lg"
        height="90%"
        width="80%"
        alignItems="center"
        padding="24"
      >
        <Image src={comic.imageUrl} height="100%" />
        <Divider orientation="vertical" ml="auto" />
        <Flex
          height="50%"
          flexDir="column"
          alignItems="flex-end"
          ml="auto"
          gap="20%"
        >
          <Heading>{comic.title}</Heading>
          <Heading fontSize="3xl">
            {comic.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Heading>

          <Button text="Add to Bag" icon={<AiOutlineShopping size="30" />} />
        </Flex>
      </Flex>
    </Flex>
  );
}
