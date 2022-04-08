export default class Comic {
  id: number;

  title: string;

  price: number;

  imageUrl: string;

  constructor(id: number, title: string, price: number, imageUrl: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
