import { ProductsService } from '../services/products.service';

export interface CartItems {
  name: string;
  products: Products[];
}
export interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;

  // Not from server
  qta_cart?: number;
}

// export class Product implements Products {
//   id: number = 0;
//   title: string = '';
//   description: string = '';
//   price: number = 0;
//   discountPercentage: number = 0;
//   rating: number = 0;
//   stock: number = 0;
//   brand: string = '';
//   category: string = '';
//   thumbnail: string = '';
//   images: string = '';

//   constructor(private productService: ProductsService) {
//     this.fetchProductData();
//   }

//   private fetchProductData(): void {
//     this.productService.getProducts().subscribe(
//       (data: Products) => {
//         this.id = data.id;
//         this.title = data.title;
//         this.description = data.description;
//         this.price = data.price;
//         this.discountPercentage = data.discountPercentage;
//         this.rating = data.rating;
//         this.stock = data.stock;
//         this.brand = data.brand;
//         this.category = data.category;
//         this.thumbnail = data.thumbnail;
//         this.images = data.images;
//       },
//       (error) => {
//         console.error('Error fetching product data:', error);
//       }
//     );
//   }

//   // Additional properties and methods can be added to the Product class
// }
