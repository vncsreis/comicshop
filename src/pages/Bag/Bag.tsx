import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import BagComic from '../../components/BagComic';
import BagComicList from '../../components/BagComicList';
import { BagItem, selectBag } from '../../slices/bagSlice';
import convertCurrency from '../../utilities/convertCurrency';

export default function Bag() {
  const items = useSelector(selectBag);

  function getTotalValue(array: BagItem[]) {
    return array.reduce(
      (prev, next) => prev + next.comic.price * next.amount,
      0,
    );
  }

  return (
    <Flex flexDir="column" py="20">
      <Heading textDecor="underline" ml="20%" mb="20">
        Shopping Bag
      </Heading>

      <BagComicList>
        {items.map((item) => (
          <BagComic key={item.comic.id} item={item} />
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
        <Heading>{convertCurrency(getTotalValue(items))}</Heading>
      </Flex>
    </Flex>
  );
}
