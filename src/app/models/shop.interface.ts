export interface Shop {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}

export interface Products {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
