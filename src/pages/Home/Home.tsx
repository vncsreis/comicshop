/* eslint-disable no-await-in-loop */

import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComicCarousel from '../../components/ComicCarousel/ComicCarousel';
import Comic from '../../models/Comic';
import { add, selectRare } from '../../slices/rareSlice';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<Comic[]>([]);
  const dispatch = useDispatch();
  const rare = useSelector(selectRare);

  async function getComics() {
    setLoading(true);
    let fails = 0;
    let success = false;

    do {
      try {
        const offset = Math.floor(Math.random() * 5000);
        const url = `https://gateway.marvel.com:443/v1/public/comics?limit=15&offset=${offset}&apikey=${
          import.meta.env.VITE_APIKEY
        }`;

        const response = await axios.get(url);

        const { results } = response.data.data;

        const fetchedComicArray = results.map((res: any) => {
          let comicIsRare = false;
          const rand = Math.floor(Math.random() * 10);

          if (rand > 8) {
            dispatch(add(res.id));
            console.log(`added ${res.id}`);
            console.log(typeof res.id);
            comicIsRare = true;
          }

          if (rare.indexOf(res.id) !== -1) {
            comicIsRare = true;
          }

          return new Comic(
            res.id,
            res.title,
            res.prices[0].price !== 0 ? res.prices[0].price : 9.99,
            `${res.thumbnail.path}.${res.thumbnail.extension}` ?? '',
            comicIsRare,
          );
        });

        success = true;

        setComics(fetchedComicArray);
      } catch (e) {
        fails += 1;
        console.log(e);
      }
    } while (fails <= 5 && success !== true);
    setLoading(false);
  }

  useEffect(() => {
    getComics();
  }, []);

  return (
    <Flex flexDir="column" alignItems="center" mt="20" pb="40">
      {loading && <div>Loading...</div>}
      {!loading && comics.length === 0 && <div>Oops! Something went wrong</div>}
      {!loading && comics.length > 0 && <ComicCarousel comics={comics} />}
    </Flex>
  );
}
