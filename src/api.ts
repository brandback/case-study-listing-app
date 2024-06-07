import { ListItemResponse } from './types';

// mock API
export const listItem = async (item: { name: string; price: number }): Promise<ListItemResponse> => {
    console.log(`Listing item: ${item.name} for $${item.price}`);
    return new Promise(resolve => setTimeout(() => resolve(item), 500));
};