import { Flex } from '@chakra-ui/react';

interface BagComicListProps {
  children: JSX.Element[] | JSX.Element;
}

export default function BagComicList({ children }: BagComicListProps) {
  return (
    <Flex as="ul" flexDir="column" gap="8" width="80%" mx="auto">
      {children}
    </Flex>
  );
}
