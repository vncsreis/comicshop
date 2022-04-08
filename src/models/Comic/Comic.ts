export default class Comic {
  id: number;

  title: string;

  price: number;

  imageUrl: string;

  rare: boolean;

  constructor(
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    rare = false,
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.rare = rare;
  }
}
