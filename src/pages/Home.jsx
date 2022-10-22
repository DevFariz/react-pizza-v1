import { useState, useEffect, useContext } from "react";

import { SearchContext } from "../App";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";

const Home = () => {
  const {searchValue} = useContext(SearchContext)
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "популярности (DESC)",
    sortBy: "rating",
  });

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sortType.sortBy.replace('-', '');
    const order = sortType.sortBy.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(`https://634acbd933bb42dca40b7c93.mockapi.io/items?page=${currentPage}&limit=${4}&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
      <Pagination onPageChange={(number) => setCurrentPage(number)}/>
    </div>
  );
};

export default Home;
