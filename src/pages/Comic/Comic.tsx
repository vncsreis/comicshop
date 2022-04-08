import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComicDisplay from '../../components/ComicDisplay';
import ComicModel from '../../models/Comic';

export default function Comic() {
  const { id } = useParams();
  const [comic, setComic] = useState<ComicModel | null>(null);
  const [loading, setLoading] = useState(false);

  async function getComicById(idToGet: string) {
    setLoading(true);
    try {
      const url = `https://gateway.marvel.com:443/v1/public/comics/${idToGet}?apikey=${
        import.meta.env.VITE_APIKEY
      }`;

      const comicInfo = (await axios.get(url)).data.data.results[0];

      console.log(comicInfo);

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
      {comic && <ComicDisplay comic={comic} />}
      {loading && <div>loading</div>}
      {!comic && !loading && <div>Ooops!</div>}
    </>
  );
}
