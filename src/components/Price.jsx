import React from 'react';
import { useSnapshot } from 'valtio';
import { state, priceState } from '../store';
import { useState, useEffect } from 'react';

const Price = () => {

    const snap = useSnapshot(state);
    const priceSnap = useSnapshot(priceState);

    function calculateShirtPrice() {
        let price = priceState.shirtPrice;
      
        if (state.isLogoTexture) {
          price += priceState.logoPrice;
        }
      
        if (state.isFullTexture) {
          price += priceState.fullDecalPrice;
        }
      
        if (state.isFullTexture && state.isLogoTexture) {
            price -= priceState.logoPrice;
            price -= priceState.fullDecalPrice;
            price += priceState.fullDecalPrice + priceState.logoPrice;
          }
      
        return price;
      }

       function calculateMugPrice() {
        let price = priceState.mugPrice;
      
        if (state.isLogoTexture) {
          price += priceState.logoPrice;
        }
      
        if (state.isFullTexture) {
          price += priceState.fullDecalPrice;
        }
      
        if (state.isFullTexture && state.isLogoTexture) {
            price -= priceState.logoPrice;
            price -= priceState.fullDecalPrice;
            price += priceState.fullDecalPrice + priceState.logoPrice;
          }
      
        return price;
      }

      function calculatePillowPrice() {
        let price = 0;
        switch (state.activeSize) {
          case "S":
            price = priceState.smallPillowPrice;
            break;
          case "M":
            price = priceState.mediumPillowPrice;
            break;
          case "L":
            price = priceState.largePillowPrice;
            break;
          default:
            break;
        }
      
        if (state.isLogoTexture) {
          price += priceState.logoPrice;
        }
      
        if (state.isFullTexture) {
          price += priceState.fullDecalPrice;
        }
      
        return price;
      }
      
      function usePillowPrice() {
        const [pillowPrice, setPillowPrice] = useState(null);
      
        useEffect(() => {
          setPillowPrice(calculatePillowPrice());
        }, [state.isLogoTexture, state.isFullTexture, state.size]);

        useEffect(() => {
            setPillowPrice(calculatePillowPrice());
          }, [state.activeSize]);
      
        return pillowPrice;
      }

      function CalculatePrice() {
        switch (state.product) {
          case "shirt":
            return calculateShirtPrice();
          case "pillow":
              return usePillowPrice();
          case "mug":
            return calculateMugPrice();
          default:
            return 0;
        }
      }
      
/*
    let price = 0;
    if (snap.product === 'shirt') {
      price = priceSnap.shirtPrice;
    } else if (snap.product === 'pillow') {
      if (snap.size === 'S') {
        price = priceSnap.smallPillowPrice;
      } else if (snap.size === 'M') {
        price = priceSnap.mediumPillowPrice;
      } else if (snap.size === 'L') {
        price = priceSnap.largePillowPrice;
      }
    } else if (snap.product === 'mug') {
      price = priceSnap.mugPrice;
    }
  
    const totalPrice = price * snap.quantity;
*/
  return (
    <div className='price-container'>
        <div className='price-container-inner'>
        {CalculatePrice()} $
        </div>
        </div>
  )
}

export default Price