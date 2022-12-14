import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Home from "./pages/Home";
import Card from "./pages/Card";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
