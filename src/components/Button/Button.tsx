import { Box, Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  text: string;
  icon?: JSX.Element | null;
}

export default function Button({ text, icon = null }: ButtonProps) {
  return (
    <ChakraButton variant="solid" colorScheme="red">
      <Box pr="4">{icon}</Box>
      {text.toLocaleUpperCase()}
    </ChakraButton>
  );
}
