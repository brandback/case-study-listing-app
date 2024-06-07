import React, { useEffect, useState } from 'react';
import { fetchPurchases } from './sampleData';
import { listItem } from './api';
import { Item, ListItemResponse } from './types';
import Card from './components/Card/Card';
import './App.css';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPurchases = async () => {
      try {
        const purchases = await fetchPurchases();
        setItems(purchases);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch purchases:", error);
        setLoading(false);
      }
    };

    loadPurchases();
  }, []);

  const handleList = async (item: Item) => {
    try {
      const response: ListItemResponse = await listItem(item);
      alert(`Listed: ${response.name} for $${response.price}`);
    } catch (error) {
      console.error("Error listing item:", error);
      alert('Failed to list item. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-container">
      {items.map((item: Item) => (
        <Card key={item.id} item={item} onList={handleList} />
      ))}
    </div>
  );
}

export default App;