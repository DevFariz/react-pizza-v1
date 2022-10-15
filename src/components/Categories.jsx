import { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onCategoryChange = (index) => {
    setActiveCategory(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li key={i} onClick={() => onCategoryChange(i)} className={activeCategory === i ? 'active' : ''}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
