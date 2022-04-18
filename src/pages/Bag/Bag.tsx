import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BagComic from '../../components/BagComic';
import BagComicList from '../../components/BagComicList';
import { selectBag } from '../../slices/bagSlice';
import convertCurrency from '../../utilities/convertCurrency';

export default function Bag() {
  const [comics] = useState(useSelector(selectBag));

  return (
    <Flex flexDir="column" py="20">
      <Heading textDecor="underline" ml="20%" mb="20">
        Shopping Bag
      </Heading>

      <BagComicList>
        {comics.map((comic) => (
          <BagComic comic={comic} />
        ))}
      </BagComicList>

      <Flex
        alignSelf="flex-end"
        mr="20%"
        mt="16"
        flexDir="column"
        textAlign="right"
      >
        <Text fontSize="2xl">Total</Text>
        <Divider />
        <Heading>{convertCurrency(0)}</Heading>
      </Flex>
    </Flex>
  );
}
