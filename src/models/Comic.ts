export default interface Comic {
  id: number;

  title: string;

  price: number;

  imageUrl: string;

  rare: boolean;
}

export function isComic(comic: any): comic is Comic {
  return (
    comic.id &&
    typeof comic.id === 'number' &&
    comic.title &&
    typeof comic.title === 'string' &&
    comic.price &&
    typeof comic.price === 'number' &&
    comic.imageUrl &&
    typeof comic.imageUrl === 'string' &&
    typeof comic.rare === 'boolean'
  );
}
