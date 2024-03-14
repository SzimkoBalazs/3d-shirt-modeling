import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { Dropdown } from 'flowbite-react';
import {state} from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import { getContrastingColor } from '../config/helpers';
import { customizeLogo } from '../assets';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro === "home" && (
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
               <Dropdown value={state.product} 
                      onChange={(e) => state.product = e.target.value} 
                      className="block w-28 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-center"
                      style={{background: snap.color, color: getContrastingColor(snap.color), appearance: "none"}}
               >
                <Dropdown.Item value="shirt" className="py-1 font-bold">Shirt</Dropdown.Item>
                <Dropdown.Item value="pillow" className="py-1 font-bold">Pillow</Dropdown.Item>
              </Dropdown>
              
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home