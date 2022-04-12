import { Divider, Flex, Heading, Image } from '@chakra-ui/react';
import { AiOutlineShopping } from 'react-icons/ai';
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

          <Button
            text="Add to Bag"
            icon={<AiOutlineShopping size="30" />}
            onClick={onAdd}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
