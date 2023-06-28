
import { useSnapshot } from 'valtio';
import {state} from '../store';
import { useEffect } from 'react';

function SizePicker() {
    //const shirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    //const pillowSizes = ['S', 'M', 'L'];
    const snap = useSnapshot(state);
  
    const handleSizeClick = (size) => {
      state.activeSize = size;
      console.log(state.activeSize);
    }


    let sizes;
    if (snap.product === 'shirt') {
      sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    } else if (snap.product === 'pillow') {
      sizes = ['S', 'M', 'L'];
    } else {
      sizes = ['There is no different size'];
    }
  
    return (
      <div className="sizepicker-container">
        {sizes.map(size => (
          <button
            key={size}
            className={`size-button ${snap.activeSize === size ? 'active' : ''}`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    );
  }

export default SizePicker