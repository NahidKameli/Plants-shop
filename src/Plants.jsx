import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Card from "./Card";

function Plants({ setLike, setShop, likeCard = [], setLikeCard, search = [], itemCounts, setItemCounts, }) {

   const [shoppingCard, setShoppingCard] = useState([]);

  const shopHandler = (product, status) => {
    let newShoppingCard;
    if (status) {
      // حذف از سبد
      newShoppingCard = shoppingCard.filter((item) => item.id !== product.id);
      setShoppingCard(newShoppingCard);
      setItemCounts((prev) => {
        const newCounts = { ...prev };
        delete newCounts[product.id]; // حذف تعداد محصول
        return newCounts;
      });
      setShop(newShoppingCard.length);
    } else {
      // اضافه به سبد
      newShoppingCard = [...shoppingCard, { ...product, count: 1 }]; // اضافه کردن count
      setShoppingCard(newShoppingCard);
      setItemCounts((prev) => ({ ...prev, [product.id]: 1 })); // تنظیم تعداد اولیه
      setShop(newShoppingCard.length);
    }
  };

  const likeHandler = (product) => {
    const newLikeCard = [...likeCard, product];
    setLikeCard(newLikeCard);
    setLike(newLikeCard.length);
  };

  const removeFavHandler = (id) => {
    const newFavCard = likeCard.filter((item) => item.id !== id);
    setLikeCard(newFavCard);
    setLike(newFavCard.length);
  };

  const removeHandler = (id) => {
    const newCard = shoppingCard.filter((item) => item.id !== id);
    setShoppingCard(newCard);
    setItemCounts((prev) => {
      const newCounts = { ...prev };
      delete newCounts[id];
      return newCounts;
    });
    setShop(newCard.length);
  };

  const updateCount = (productId, delta) => {
    setItemCounts((prev) => {
      const newCount = (prev[productId] || 1) + delta;
      return { ...prev, [productId]: Math.max(1, Math.min(10, newCount)) }; // بین 1 و 10
    });
    setShoppingCard((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, count: Math.max(1, Math.min(10, item.count + delta)) }
          : item
      )
    );
  };

  const total = shoppingCard
    .reduce((sum, product) => {
      const price = parseFloat(product.price) || 0;
      const count = itemCounts[product.id] || 1; // استفاده از itemCounts
      return sum + price * count;
    }, 0)
    .toFixed(2);

  return (
    <div className={shoppingCard.length > 0 ? "before" : "after"}>
      {search.length > 0 ? (
        search.map((product) => (
          <div key={product.id} className="box">
            <img src={product.img} alt="" />
            {likeCard.map((item) => item.id).includes(product.id) &&
            likeCard.length > 0 ? (
              <button className="favorite" onClick={() => removeFavHandler(product.id)}>
                <IoMdHeart color="green" size={28} />
              </button>
            ) : (
              <button
                className="favorite"
                onClick={() => {
                  likeHandler(product);
                }}
              >
                <IoMdHeartEmpty color="green" size={30} />
              </button>
            )}
            <p>{product.title}</p>
            <p>${product.price}</p>
            {shoppingCard.map((item) => item.id).includes(product.id) &&
            shoppingCard.length > 0 ? (
              <button disabled style={{ marginBottom: "15%" }}>
                <CiCirclePlus color="gray" className="opacity-50" size={44} />
              </button>
            ) : (
              <button
                className="add"
                onClick={() => {
                  shopHandler(product, false);
                }}
              >
                <CiCirclePlus color="green" size={44} />
              </button>
            )}
          </div>
        ))
      ) : (
        <div
          style={{
            margin: "200%",
            width: "500%",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "10px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",}}
        >
          <p style={{ color: "white", fontSize: "1rem", padding: "40% 10px 42%" }}>
            No find item
          </p>
        </div>
      )}
      {!!shoppingCard.length && (
        <div className="plant-card">
          <h2>Shopping Card</h2>
          {shoppingCard.map((product) => (
            <Card
              key={product.id}
              data={product}
              removeHandler={removeHandler}
              updateCount={updateCount}
              itemCounts={itemCounts}
            />
          ))}
          <div style={{ marginTop: "20px", marginBottom: "10px" }}>
            <p style={{ textAlign: "center" }}>Total: ${total}</p>
          </div>
          <button className="order">Order</button>
        </div>
      )}
    </div>
  );
}

export default Plants;