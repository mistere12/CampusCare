import {
  useSearchParams,
} from "react-router-dom";

import dishes from "../data/dishes";
import DishCard from "../components/dishCard";

function Menu() {
  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();

  const selectedCategory =
    searchParams.get("category") || "All";

  const categories = [
    "All",
    "Meat",
    "Vegetarian",
    "Vegan",
  ];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter(
          (dish) =>
            dish.category === selectedCategory
        );

  function handleCategoryChange(category) {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: category,
      });
    }
  }

  return (
    <section>
      <h2>Our Menu</h2>

      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "active"
                : ""
            }
            onClick={() =>
              handleCategoryChange(category)
            }
          >
            {category}
          </button>
        ))}
      </div>

      <p>
        Current category:{" "}
        <strong>
          {selectedCategory}
        </strong>
      </p>

      <div className="dish-grid">
        {filteredDishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;