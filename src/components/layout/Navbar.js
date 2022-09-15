import { useNavigate } from 'react-router-dom';

function Navbar({ state }) {
  const navigate = useNavigate();

  const goToCartPage = () => {
    navigate('/cart');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left-container">
          <svg id="logo-54" width="50" height="41" viewBox="0 0 50 41" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.6841 40.138C31.7298 40.138 40.6841 31.1837 40.6841 20.138C40.6841 9.09234 31.7298 0.138031 20.6841 0.138031C9.63837 0.138031 0.684082 9.09234 0.684082 20.138C0.684082 31.1837 9.63837 40.138 20.6841 40.138ZM26.9234 9.45487C27.2271 8.37608 26.1802 7.73816 25.2241 8.41933L11.8772 17.9276C10.8403 18.6663 11.0034 20.138 12.1222 20.138L15.6368 20.138V20.1108H22.4866L16.9053 22.0801L14.4448 30.8212C14.1411 31.9 15.1879 32.5379 16.1441 31.8567L29.491 22.3485C30.5279 21.6098 30.3647 20.138 29.246 20.138L23.9162 20.138L26.9234 9.45487Z" className="ccustom"></path>
          </svg>
          <span>BrandShoe</span>
        </div>
        
        <div className="right-container">
          <button onClick={goToCartPage} className="cart-button">
            <span className="material-icons-outlined">
              add_shopping_cart
            </span>
            {
              state.cart.length
                ? <span className="total-items">{state.cart.length}</span>
                : null
            }
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
