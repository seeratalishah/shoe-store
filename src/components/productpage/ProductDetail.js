import { useState } from "react";
import QuantityInput from "../common/QuantityInput";

function ProductDetail({ product, state, dispatch }) {
  const isProductAddedToCart = state.cart.find(
    (cartProduct) => cartProduct.id === product.id
  );

  const [quantity, setQuantity] = useState(0);

  const addProductToCart = () => {
    // If product is added to cart
    if (isProductAddedToCart) {
      dispatch({
        type: "UPDATE_CART_ITEM",
        payload: {
          id: product.id,
          quantity: quantity,
        },
      });

      // Use return so that the next code does not run if product is added to cart
      return;
    }

    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: {
        ...product,
        quantity: quantity,
      },
    });
  };

  const stars = [];

  for (let i = 1; i <= product.rating; i++) {
    stars.push(i);
  }

  return (
    <>
      <div className="product-detail">
        <img src={product.image} alt={product.alt} />

        <div className="product-data">
          <h1>{product.title}</h1>
          <p className="product-description">{product.desc}</p>
          <p className="product-info">
            <div className="product-rating rating">
              {stars.map((star, index) => {
                return (
                  <span key={index} class="material-icons-outlined">
                    {" "}
                    star{" "}
                  </span>
                );
              })}
            </div>
            <span className="text-tertiary">{product.price}</span>
          </p>

          <div className="flex-container">
            <QuantityInput
              quantity={quantity}
              setQuantity={setQuantity}
            ></QuantityInput>

            <button
              className="add-to-cart-button"
              disabled={!quantity}
              onClick={addProductToCart}
            >
              Add to cart
            </button>
          </div>
          {isProductAddedToCart ? (
            <p className="cart-product-message">Added to cart</p>
          ) : null}
        </div>
      </div>

      <div className="product-comments">
        <h2>{`${product.comments.length} comments`}</h2>
        <ul>
         {
          product.comments.map((comment, index)=>{
            return (
              <li key={index}>
              <div className="user-details">
               <img src={comment.userImage} alt="" />
                <div className="date">
                  <span>{comment.userName}</span>
                  <span>{comment.date}</span>
                </div>
               </div>
              
              <div className="user-comment">
                <p>{comment.comment}</p>
                <div className="options">
                  <span class="material-icons-outlined">favorite</span>
                  <a href="">Reply</a>
                </div>
              </div>
            </li>
            )
          })
         }
        </ul>
      </div>
    </>
  );
}

export default ProductDetail;
