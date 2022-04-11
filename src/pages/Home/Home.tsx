import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ComicCarousel from '../../components/ComicCarousel/ComicCarousel';
import Comic from '../../models/Comic';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<Comic[]>([]);

  async function getComics() {
    setLoading(true);
    try {
      const offset = Math.floor(Math.random() * 5000);
      const url = `https://gateway.marvel.com:443/v1/public/comics?limit=15&offset=${offset}&apikey=${
        import.meta.env.VITE_APIKEY
      }`;

      const response = await axios.get(url, { timeout: 5000 });

      const { results } = response.data.data;

      const fetchedComicArray = results.map((res: any) => {
        const rand = Math.floor(Math.random() * 10);
        return new Comic(
          res.id,
          res.title,
          res.prices[0].price !== 0 ? res.prices[0].price : 9.99,
          `${res.thumbnail.path}.${res.thumbnail.extension}` ?? '',
          rand > 8,
        );
      });

      setComics(fetchedComicArray);
    } catch (_) {
      console.log('error');
    }
    setLoading(false);
  }

  useEffect(() => {
    getComics();
  }, []);
  return (
    <Flex flexDir="column" alignItems="center" mt="20">
      {loading && <div>Loading...</div>}
      {!loading && comics.length === 0 && <div>Oops! Something went wrong</div>}
      {!loading && comics.length > 0 && <ComicCarousel comics={comics} />}
    </Flex>
  );
}
