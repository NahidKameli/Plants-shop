import { RiDeleteBinLine } from "react-icons/ri";

function Card({ data: { id, title, price, img, count = 1 }, removeHandler, updateCount, itemCounts }) {
  
  const decreaseHandler = () => {
    updateCount(id, -1); // کاهش تعداد
  };

  const increaseHandler = () => {
    updateCount(id, 1); // افزایش تعداد
  };

  console.log("Card رندر شد:", { id, title, price, count });

  return (
    <div className="plants">
      <div className="cards">
        <img src={img} alt="" />
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <div className="shops">
        <button className="decrease" onClick={decreaseHandler}>
          -
        </button>
        <input type="text" value={itemCounts[id] || count} readOnly min={1} max={10} />
        <button className="increase" onClick={increaseHandler}>
          +
        </button>
      </div>
      <div className="remove" style={{ margin: "auto" }} onClick={() => removeHandler(id)}>
        <RiDeleteBinLine size={18} />
      </div>
    </div>
  );
}

export default Card;