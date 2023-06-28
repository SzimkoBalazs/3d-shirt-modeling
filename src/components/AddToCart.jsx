import { plusSign, minusSign } from '../assets';
import { useSnapshot } from 'valtio';
import {state} from '../store';

function AddToCart() {
  const snap = useSnapshot(state);
  

  const handleAddToCart = () => {
    state.totalQuantity += snap.quantity;
  }

  const handlePlusQuantityChange = (amount) => {
   state.quantity += amount;
  }

  const handleMinusQuantityChange = (amount) => {
    if(snap.quantity > 0){
        state.quantity -= amount;
    }
    
   }

  return (
    <div className="addtocart-container">
      <div className="quantity-container">
        <img
          src={plusSign}
          alt="plus icon"
          className="quantity-button"
          onClick={() => handlePlusQuantityChange(1)}
        />
        <div className="quantity-label">
          {snap.quantity}
        </div>
        <img
          src={minusSign}
          alt="minus icon"
          className="quantity-button"
          onClick={() => handleMinusQuantityChange(1)}
        />
      </div>
      <div className="addtocart-button">
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
      </div>
    </div>
  );
}

export default AddToCart