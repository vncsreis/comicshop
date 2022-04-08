import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ComicCarousel from './components/ComicCarousel/ComicCarousel';
import Header from './components/Header';
import Comic from './models/Comic/Comic';

function App() {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<Comic[]>([]);

  async function getComics() {
    setLoading(true);
    try {
      const offset = Math.floor(Math.random() * 5000);
      const url = `https://gateway.marvel.com:443/v1/public/comics?limit=15&offset=${offset}&apikey=${
        import.meta.env.VITE_APIKEY
      }`;

      const response = await axios.get(url);

      const { results } = response.data.data;

      const fetchedComicArray = results.map(
        (res: any) =>
          new Comic(
            res.id,
            res.title,
            res.prices[0].price ?? 9.99,
            `${res.thumbnail.path}.${res.thumbnail.extension}` ?? '',
          ),
      );

      console.log(results);

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
    <div className="App">
      <Header />
      <Flex flexDir="column" alignItems="center" mt="20">
        {loading && <div>Loading...</div>}
        {!loading && comics && <ComicCarousel comics={comics} />}
      </Flex>
    </div>
  );
}

export default App;
