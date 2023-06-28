import Canvas from "./canvas"
import Canvas2 from "./canvas2"
import Canvas3 from "./canvas3"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import {state} from "./store"
import { useSnapshot } from 'valtio';
import ShoppingCart from "./pages/ShoppingCart"


function App() {
  const snap = useSnapshot(state);

  let ComponentToRender;
  switch (snap.product) {
    case "shirt":
      ComponentToRender = Canvas;
      break;
    case "mug":
      ComponentToRender = Canvas2;
      break;
      case "pillow":
        ComponentToRender = Canvas3;
        break;
    default:
      ComponentToRender = null;
  }

  return (
    <main className="app transition-all ease-in">
      <Home />
      {snap.renderProduct && ComponentToRender && <ComponentToRender />}
      <Customizer />
     <ShoppingCart/>

        </main>
  )
}

export default App
