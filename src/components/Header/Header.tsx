import { Flex, Text } from '@chakra-ui/react';
import { AiOutlineShopping } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBagAmount } from '../../slices/bagSlice';
import SearchBar from '../SearchBar';
import styles from './Header.module.css';

export default function Header() {
  const amount = useSelector(selectBagAmount);

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
      <SearchBar />

      <Link to="/bag">
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
                {amount}
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
      </Link>
    </Flex>
  );
}
