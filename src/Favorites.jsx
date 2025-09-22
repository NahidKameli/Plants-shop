import { IoMdHeart } from "react-icons/io"


function Favorites({ likeCard=[], setLikeCard, setLike }) {

    const removeFavHandler = (id) => {
        const newFavCard = likeCard.filter(item => item.id !== id);
        setLikeCard(newFavCard);
        setLike(newFavCard.length);
    }
    return (
        <>
            <h1 className='one' >My Favorites</h1>
            <div className='fav'>
                <div className="cart">
                    {
                        likeCard.length > 0 ? likeCard.map((item) => (
                            <div key={item.id} className='favorite-box'>
                                <img style={{ width: "70%" }} src={item.img} alt="" />
                                <p style={{fontSize:"0.9rem"}}>{item.title}</p>
                                <p style={{fontSize:"0.9rem"}}>${item.price}</p>
                               <button
                                    className="favorite-heart transition-all duration-300 text-red-500 hover:text-red-700"
                                    onClick={() => removeFavHandler(item.id)}
                                >
                                    <IoMdHeart size={28} />
                                </button>
                            </div>
                        )) : <p style={{ color: "green", fontSize: "1rem", padding: "40% 10px 42%" }}>No favorites added yet.</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Favorites
