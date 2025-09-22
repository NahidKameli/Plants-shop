import { useState } from "react";
import Background from "./Background";
import Header from "./Header";
import Plants from "./Plants";
import Favorites from "./Favorites";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Footer";
import { products } from "./products";

function App() {
  const [like, setLike] = useState(0);
  const [shop, setShop] = useState(0);
  const [likeCard, setLikeCard] = useState([]);
  const [shoppingCard, setShoppingCard] = useState([]);
  const [search, setSearch] = useState(products);
  const [itemCounts, setItemCounts] = useState({});

  const searchHandler = (e) => {
    const userSearch = e.target.value.toLowerCase();
    console.log("search:", userSearch);
    if (userSearch === "") {
      setSearch([...products]);
    } else {
      const filterSearch = products.filter(item => item.title.toLowerCase().includes(userSearch));
      setSearch(filterSearch);
    }
  }

  return (
    <Router>
      <Background>
        <Header like={like} shop={shop} searchHandler={searchHandler} />
        <Routes>
          <Route path="/" element={<Navigate to="/plants" replace />} />
          <Route
            path="/plants"
            element={
              <Plants
                like={like}
                setLike={setLike}
                shop={shop}
                setShop={setShop}
                likeCard={likeCard}
                setLikeCard={setLikeCard}
                shoppingCard={shoppingCard}
                setShoppingCard={setShoppingCard}
                searchHandler={searchHandler}
                search={search}
                setSearch={setSearch}
                itemCounts={itemCounts}
                setItemCounts={setItemCounts}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                likeCard={likeCard}
                setLikeCard={setLikeCard}
                setLike={setLike}
              />
            }
          />
        </Routes>
        <Footer />
      </Background>
    </Router>
  );
}

export default App;