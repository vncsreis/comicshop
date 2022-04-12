import { SearchIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, Text } from '@chakra-ui/react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <Flex
      alignItems="center"
      className={styles.header}
      backgroundColor="red.500"
    >
      <Link to="/">
        <Flex width="20%">
          <h1 className={styles.title}>COMICSHOP</h1>
        </Flex>
      </Link>
      <Flex ml="auto" flex="1" justifyContent="center">
        <Input
          fontSize="xl"
          border="none"
          type="text"
          width="70%"
          borderRightRadius="none"
          backgroundColor="white"
          color="black"
        />
        <IconButton
          border="none"
          borderLeftRadius="none"
          icon={<SearchIcon />}
          aria-label="Search"
          type="button"
          backgroundColor="white"
        />
      </Flex>
      <Flex width="20%" justifyContent="space-evenly">
        <Flex alignItems="center" cursor="pointer">
          <AiOutlineShopping size="3rem" color="white" />
          <Flex
            flexDir="column"
            width="30px"
            height="30px"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              transform="translateY(5px)"
              lineHeight="xl"
              fontSize="2xl"
              color="white"
              fontWeight="bold"
              display="flex"
            >
              12
            </Text>
          </Flex>
        </Flex>
        {/* <Flex alignItems="center" cursor="pointer">
          <AiOutlineUser size="3rem" color="white" />
          <Text fontSize="xl" color="white" transform="translateY(5px)">
            User Name
          </Text>
        </Flex> */}
      </Flex>
    </Flex>
  );
}
