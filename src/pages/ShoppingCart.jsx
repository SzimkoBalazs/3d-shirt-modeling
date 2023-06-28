import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import {state} from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
  fadeAnimation
} from '../config/motion';
import { getContrastingColor } from '../config/helpers';
import { customizeLogo } from '../assets';

const ShoppingCart = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
    {snap.intro === "shoppingcart" && (
      <motion.section className="home" {...slideAnimation('left')}>
        <motion.header {...slideAnimation("down")}>
          <img 
            src={customizeLogo}
            alt="logo"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain"
          />
         
        </motion.header>

        <motion.div className="home-content" {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className="head-text">
             LET'S <br className="xl:block hidden" /> STYLE.
            </h1>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
             <div style={{ display: 'flex', alignItems: 'center' }}>
            <CustomButton 
              type="filled"
              title="Back to Shopping"
              handleClick={() => {state.intro = "customize", state.renderProduct = true}}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm mr-5"
            />
            </div>
          </motion.div>

          <motion.div
            {...headContentAnimation}
            className="flex flex-col gap-5"
          >
            <p className="max-w-md font-normal text-gray-600 text-base">
            Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
            </p>

            <CustomButton 
              type="filled"
              title="Customize It"
              handleClick={() => state.intro = "customize"}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
            <div className="select-container">
             <select value={state.product} 
                    onChange={(e) => state.product = e.target.value} 
                    className="block w-28 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-center"
                    style={{background: snap.color, color: getContrastingColor(snap.color), appearance: "none"}}
             >
              <option value="shirt" className="py-1 font-bold">Shirt</option>
              <option value="mug" className="py-1 font-bold">Mug</option>
              <option value="pillow" className="py-1 font-bold">Pillow</option>
            </select>
            <div className="select-arrow"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
)}
  </AnimatePresence>
  )
}

export default ShoppingCart