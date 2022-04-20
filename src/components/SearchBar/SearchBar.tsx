import { SearchIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const search = input.replaceAll(' ', '+');

    // IMPLEMENT
    navigate(`/search?input=${search}`);
  }

  return (
    <Flex
      as="form"
      ml="auto"
      flex="1"
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      <Input
        fontSize="xl"
        border="none"
        type="text"
        width="70%"
        borderRightRadius="none"
        backgroundColor="white"
        color="black"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconButton
        border="none"
        borderLeftRadius="none"
        icon={<SearchIcon />}
        aria-label="Search"
        type="submit"
        backgroundColor="white"
      />
    </Flex>
  );
}
