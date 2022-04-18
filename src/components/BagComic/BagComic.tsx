import Comic from '../../models/Comic';

interface BagComicProps {
  comic: Comic;
}

export default function BagComic({ comic }: BagComicProps) {
  return <div>{comic.title}</div>;
}
