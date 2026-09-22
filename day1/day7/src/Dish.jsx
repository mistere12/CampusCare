import { useState } from "react";

function Dish({ dish, onAdd }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    onAdd(dish.price);
  };

  return (
    <div className="dish-card">
      <h3>{dish.name}</h3>

      <p>{dish.category}</p>

      <p>{dish.price} ETB</p>

      {dish.spicy && <span> Spicy</span>}

      <button onClick={handleAdd}>Add</button>

      <p>Added: {count}</p>
    </div>
  );
}

export default Dish;