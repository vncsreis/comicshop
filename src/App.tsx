import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import ComicCard from './components/ComicCard';
import Header from './components/Header';
import Comic from './models/Comic/Comic';

function App() {
  const [comics, setComics] = useState<Comic[]>([]);

  async function getComics() {
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
            res.prices[0].price ?? 0,
            res.images[0].path ?? '',
          ),
      );

      console.log(fetchedComicArray);
      setComics(fetchedComicArray);
    } catch (_) {
      console.log('error');
    }
  }

  useEffect(() => {
    getComics();
  }, []);

  return (
    <div className="App">
      <Header />
      <Flex flexDir="column" alignItems="center" mt="20">
        <Carousel title="Test">
          <ComicCard />
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 2
          </div>
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 3
          </div>
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 4
          </div>
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 5
          </div>
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 6
          </div>
        </Carousel>
      </Flex>
    </div>
  );
}

export default App;
