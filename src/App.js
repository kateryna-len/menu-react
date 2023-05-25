import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import menu from './data';
import Menu from './components/Menu';
import Categories from './components/Categories';

const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(tempItems);

  const filterCategory = (name) => {
    if (name === 'all') {
      return setMenuItems(menu);
    }
    const newCategoryList = menu.filter((item) => item.category === name);
    setMenuItems(newCategoryList);
  };

  return (
    <main>
      <section className="menu">
        <Title text={'our menu'} />
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
