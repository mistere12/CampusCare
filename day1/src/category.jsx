const categories = ["All", "Ethiopian", "Italian"];

function CategoryBar({ selectedCategory, onSelect }) {
  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={selectedCategory === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;