import { useState } from 'react';
import { useSelector } from 'react-redux';
import BagComic from '../../components/BagComic';
import BagComicList from '../../components/BagComicList';
import { selectBag } from '../../slices/bagSlice';

export default function Bag() {
  const [comics] = useState(useSelector(selectBag));

  return (
    <div>
      <div>Bag</div>

      <BagComicList>
        {comics.map((comic) => (
          <BagComic comic={comic} />
        ))}
      </BagComicList>
    </div>
  );
}
