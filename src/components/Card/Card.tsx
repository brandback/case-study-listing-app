import React from 'react';
import { Item } from '../../types'; // Import the Item type
import './Card.css'; // Import the CSS for styling

interface CardProps {
  item: Item;
  onList: (item: Item) => void; // Function to handle listing the item
}

const Card: React.FC<CardProps> = ({ item, onList }) => {
  const displayImage = item.images[0];

  return (
    <div className="card">
      <h3>{item.name} - ${item.price}</h3>
      <p>{item.description}</p>
      <img src={displayImage} alt={item.name} className="card-image" />
      <button onClick={() => onList(item)}>List on Marketplace</button>
    </div>
  );
};

export default Card;