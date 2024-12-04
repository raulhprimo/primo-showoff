import { motion } from 'framer-motion';
import { Coolshape } from 'coolshapes-react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          IIII
        </motion.div>
        <nav>
          <ul>
            {['ABOUT', 'WORK', 'CONTACT'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                whileHover={{ scale: 1.1 }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <motion.div 
          className="binary-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span>101111100101101010111</span>
          <span className="separator">{'/////////////////'}</span>
          <span>100110011101</span>
        </motion.div>
        
        <div className="title-container">
          <div className="title-wrapper">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "backOut" }}
            >
              PRIMO
            </motion.h1>
            
            <motion.div 
              className="star"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                y: [-10, 0, -10]
              }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2, 
                ease: "backOut",
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Coolshape
                type="star"
                index={5}
                noise={false}
                size={40}
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "backOut" }}
            >
              TECH
            </motion.h1>
          </div>
        </div>

        <motion.div 
          className="binary-line bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <span>100100000001000</span>
          <span className="separator">{'/////////////////'}</span>
          <span>001010101101001111101011001</span>
        </motion.div>
      </main>
    </>
  );
}

export default App;
