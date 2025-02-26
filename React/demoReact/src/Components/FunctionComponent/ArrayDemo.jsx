import React from 'react';
import './ArrayDemo.css';

const ArrayDemo = () => {
  const foodItems = [
    {
      id: 1,
      name: "Pizza",
      category: "Fast Food",
      price: 12.99,
      ingredients: ["Dough", "Tomato Sauce", "Cheese", "Pepperoni"],
      isVegetarian: false,
      calories: 300
    },
    {
      id: 2,
      name: "Burger",
      category: "Fast Food",
      price: 8.99,
      ingredients: ["Bun", "Lettuce", "Tomato", "Cheese", "Beef Patty"],
      isVegetarian: false,
      calories: 450
    },
    {
      id: 3,
      name: "Pasta",
      category: "Italian",
      price: 10.99,
      ingredients: ["Pasta", "Tomato Sauce", "Parmesan", "Basil"],
      isVegetarian: true,
      calories: 350
    },
    {
      id: 4,
      name: "Salad",
      category: "Healthy",
      price: 6.99,
      ingredients: ["Lettuce", "Cucumber", "Tomato", "Olives", "Feta Cheese"],
      isVegetarian: true,
      calories: 200
    },
    {
      id: 5,
      name: "Sushi",
      category: "Japanese",
      price: 14.99,
      ingredients: ["Rice", "Seaweed", "Fish", "Avocado"],
      isVegetarian: false,
      calories: 250
    }
  ];

  return (
    <div className="container">
      <h1>Food Items</h1>
      <div className="grid-container">
        {foodItems.map(food => (
          <div key={food.id} className='food-card'>
            <h2>{food.name}</h2>
            <p><strong>Ingredients:</strong> {food.ingredients.join(', ')}</p>
            <p><strong>Category:</strong> {food.category}</p>
            <p><strong>Price:</strong> ${food.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayDemo;
