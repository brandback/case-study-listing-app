// Define the Item interface used across the application
export interface Item {
    id: number;
    name: string;
    price: number;
    images: string[];
    description: string;
    user_images: string[];
  }
  
  // Define the response structure for listing an item
  export interface ListItemResponse {
    name: string;
    price: number;
  }