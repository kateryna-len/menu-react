import React from 'react';

function Categories({ categories, filterCategory }) {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="btn"
            type="button"
            onClick={() => filterCategory(category)}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
