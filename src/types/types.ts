// src/types/types.ts

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

  export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }
  
  export interface CartState {
    items: CartItem[];
  }