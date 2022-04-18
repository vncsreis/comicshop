import { Divider, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Comic from '../../models/Comic';
import Button from '../Button';

interface BagComicProps {
  comic: Comic;
}

export default function BagComic({ comic }: BagComicProps) {
  const [amount] = useState(1);

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
        <Input type="number" value={amount} />
        <Button text="Remove" onClick={() => {}} />
      </Flex>

      <Flex flexDir="column" ml="auto" width="20%" alignItems="flex-end">
        <Text fontStyle="italic">
          {comic.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}{' '}
          x {amount}
        </Text>

        <Divider />
        <Heading>
          {(comic.price * amount).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Heading>
      </Flex>
    </Flex>
  );
}
