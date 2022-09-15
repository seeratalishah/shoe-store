import { Link } from 'react-router-dom';

function ProductCard({ product, state, dispatch }) {
  const addProductToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: {
        // Add the whole product data
        ...product,
        quantity: 1,
      },
    });
  };

  const isProductAddedToCart = state.cart.find(
    (cartProduct) => cartProduct.id === product.id
  );

  //array for rating stars

  const stars = [];

  for(let i=1; i<=product.rating; i++){
    stars.push(i);
  }


  return (
    <div className="product-card">
      <img src={product.image} alt={product.alt} />

      <div className="product-data">
        <h2>{product.title}</h2>
        <p>
          Price: <span>{product.price}</span>
        </p>
        <div className="rating">
          {
            stars.map((star, index)=>{
              return  <span key={index} class="material-icons-outlined"> star </span>
            }) 
          }
        </div>

        <div className="buttons-container">
          <Link to={`/product/${product.id}`}>View product</Link>

          <button disabled={isProductAddedToCart} className="cart-button" onClick={addProductToCart}>
            <span className="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
