import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  stylishShirt,
  download,
  text,
  sizeLogo,
  addToCartLogo,
  priceLogo,
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const InfoTabs = [
  {
    name: "sizepicker",
    icon: sizeLogo,
  },
  {
    name: "addtocart",
    icon: addToCartLogo,
  },
  {
    name: "price",
    icon: priceLogo,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
  
];

export const DownldTabs = [
  {
    name: "imgDownld",
    icon: download,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
  text: {
    stateProperty: "textDecal",
    filterTab: "textShirt",
  },
};
