import { Divider, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Comic from '../../models/Comic';
import Button from '../Button';
import convertCurrency from '../../utilities/convertCurrency';

interface BagComicProps {
  comic: Comic;
}

export default function BagComic({ comic }: BagComicProps) {
  const [amount, setAmount] = useState(1);
  const [input, setInput] = useState(amount);

  function handleAmountChange(amnt: number) {
    let newAmount = amnt;

    if (newAmount <= 0) {
      newAmount = 1;
      setInput(1);
    }
    setAmount(newAmount);
  }

  return (
    <Flex
      height="200px"
      py="4"
      px="20"
      shadow="md"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Flex height="100%" alignItems="center" gap="5" width="30%">
        <Image height="100%" src={comic.imageUrl} />
        <Heading fontSize="xl">{comic.title}</Heading>
      </Flex>

      <Flex ml="auto" alignItems="center" gap="10">
        <Input
          type="number"
          value={input}
          onBlur={() => {
            handleAmountChange(input);
          }}
          onChange={(e) => setInput(parseInt(e.target.value, 10))}
        />
        <Button text="Remove" onClick={() => {}} />
      </Flex>

      <Flex flexDir="column" ml="auto" width="20%" alignItems="flex-end">
        <Text fontStyle="italic">
          {convertCurrency(comic.price)} x {amount}
        </Text>

        <Divider />
        <Heading>{convertCurrency(comic.price * amount)}</Heading>
      </Flex>
    </Flex>
  );
}
