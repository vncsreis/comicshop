import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ComicDisplay from '../../components/ComicDisplay';
import ComicModel from '../../models/Comic';
import { add } from '../../slices/bagSlice';

export default function Comic() {
  const { id } = useParams();
  const [comic, setComic] = useState<ComicModel | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function getComicById(idToGet: string) {
    setLoading(true);
    try {
      const url = `https://gateway.marvel.com:443/v1/public/comics/${idToGet}?apikey=${
        import.meta.env.VITE_APIKEY
      }`;

      const comicInfo = (await axios.get(url)).data.data.results[0];

      const comicFetched = new ComicModel(
        comicInfo.id,
        comicInfo.title,
        comicInfo.prices[0].price !== 0 ? comicInfo.prices[0].price : 9.99,
        `${comicInfo.thumbnail.path}.${comicInfo.thumbnail.extension}`,
      );

      setComic(comicFetched);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (id) getComicById(id);
  }, []);

  return (
    <>
      {comic && (
        <ComicDisplay comic={comic} onAdd={() => dispatch(add(comic))} />
      )}
      {loading && <div>loading</div>}
      {!comic && !loading && <div>Ooops!</div>}
    </>
  );
}
