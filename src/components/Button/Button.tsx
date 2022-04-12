import { Box, Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  text: string;
  icon?: JSX.Element | null;
}

export default function Button({ text, icon = null }: ButtonProps) {
  return (
    <ChakraButton
      variant="solid"
      colorScheme="red"
      display="flex"
      alignItems="center"
      padding="6"
    >
      <Box pr="4">{icon}</Box>
      <Box
        h="100%"
        display="flex"
        alignItems="center"
        transform="translateY(5px)"
      >
        {text.toLocaleUpperCase()}
      </Box>
    </ChakraButton>
  );
}
