import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBag } from '../../slices/bagSlice';

export default function Bag() {
  const [comics, setComics] = useState(useSelector(selectBag));

  return (
    <div>
      <div>Bag</div>

      <ul>
        {comics.map((comic) => (
          <div>{comic.title}</div>
        ))}
      </ul>
    </div>
  );
}
