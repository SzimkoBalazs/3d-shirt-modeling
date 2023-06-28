import { proxy } from "valtio";

export const state = proxy({
  intro: "home",
  renderProduct: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  isTextTexture: false,
  logoDecal: "./myLogo1.png",
  fullDecal: "./myLogo1.png",
  textDecal: "./myLogo1.png",
  product: "shirt",
  size: "",
  activeSize: "",
  quantity: 1,
  totalQuantity: 0,
});

export const priceState = proxy({
  shirtPrice: 9.99,
  smallPillowPrice: 4.99,
  mediumPillowPrice: 6.99,
  largePillowPrice: 8.99,
  mugPrice: 7.99,
  logoPrice: 5.99,
  fullDecalPrice: 8.99,
});
