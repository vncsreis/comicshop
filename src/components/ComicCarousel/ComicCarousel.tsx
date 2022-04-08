import Comic from '../../models/Comic';
import Carousel from '../Carousel';
import ComicCard from '../ComicCard';

interface ComicCarouselProps {
  comics: Comic[];
}

export default function ComicCarousel({ comics }: ComicCarouselProps) {
  return (
    <Carousel title="Comics">
      {comics.map((comic) => (
        <ComicCard
          key={comic.id}
          title={comic.title}
          id={comic.id}
          imageUrl={comic.imageUrl}
          price={comic.price}
          rare={comic.rare}
        />
      ))}
    </Carousel>
  );
}
