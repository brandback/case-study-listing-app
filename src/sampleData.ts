import { Item } from './types';

// Mock API
  export const fetchPurchases = async (): Promise<Item[]> => {
      return new Promise(resolve => setTimeout(() => {
          resolve([
              { 
                  id: 1, 
                  name: "Beige Coat", 
                  price: 30, 
                  images: ["https://storage.googleapis.com/retrade-7d99c.appspot.com/brands/gerry_weber/11_150003-11507_9360/front/miniature_front.jpg"],
                  description: "A stylish beige coat perfect for winter evenings.",
                  user_images: ["https://images1.vinted.net/t/02_005ea_RFEL2sCxri2YwycHXNLQPReK/f800/1616332050.jpeg?s=087eba4f582c6bfa4d3ed4057cb74f6a6303ffa6"],
              },
              { 
                  id: 2, 
                  name: "Striped Dress", 
                  price: 45, 
                  images: ["https://storage.googleapis.com/retrade-7d99c.appspot.com/brands/gerry_weber/11_380055-11114_4002/front/miniature_front.jpg"],
                  description: "A casual striped dress ideal for day-to-day wear.",
                  user_images: ["https://ih1.redbubble.net/image.3845779383.5218/aldr,x1440,front-c,168,326,600,600-bg,f8f8f8.jpg"],
              },
          ]);
      }, 1000));
  };