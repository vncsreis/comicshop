import { SearchIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <Flex alignItems="center" className={styles.header}>
      <h1 className={styles.title}>COMICSHOP</h1>
      <Flex mx="auto">
        <Input type="text" />
        <IconButton icon={<SearchIcon />} aria-label="Search" type="button" />
      </Flex>
    </Flex>
  );
}
