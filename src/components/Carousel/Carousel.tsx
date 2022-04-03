import { Box, Heading } from '@chakra-ui/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './Carousel.module.css';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import './modified.css';

interface CarouselProps {
  rightButton?: JSX.Element;
  leftButton?: JSX.Element;
  children: JSX.Element[];
  title: string;
}

export default function Carousel({
  rightButton,
  leftButton,
  children,
  title,
}: CarouselProps) {
  return (
    <Box
      border="solid 2px"
      borderColor="red"
      width="70%"
      display="flex"
      flexDir="column"
      alignItems="center"
      position="relative"
    >
      <Box
        display="block"
        mr="auto"
        ml="20"
        px="5"
        backgroundColor="white"
        zIndex="1"
        position="absolute"
        top="-4"
        left="5"
      >
        <Heading>{title}</Heading>
      </Box>
      <Splide
        className={styles.carousel}
        renderControls={
          leftButton && rightButton
            ? () => {
                return (
                  <div className={`splide__arrows ${styles.control}`}>
                    {rightButton}
                    {leftButton}
                  </div>
                );
              }
            : undefined
        }
        options={{
          type: 'loop',
          arrows: true,
          perPage: 3,
          perMove: 1,
          breakpoints: {
            1100: {
              perPage: 2,
              perMove: 1,
            },
            800: {
              perPage: 1,
              perMove: 1,
            },
          },
        }}
      >
        {children.map((child, i) => (
          <SplideSlide key={title + i} className={styles.customSlide}>
            {child}
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
}
