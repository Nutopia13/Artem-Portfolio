import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuDiamond } from './Icons/MenuDiamond'
import { Close } from './Icons/Close'
import { useEffect } from 'react'


const NavBar = () => {
    useEffect (() =>{
        const menu = document.getElementById("menu");
    
    Array.from(document.getElementsByClassName("menu-item"))
      .forEach((item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index;
        }
      });
    })

    const [isOpen, setIsOpen] = useState(true);

    const resetState = () => {
        setIsOpen(true);
      };

      const NavVariants = {
        hover: {rotate: 180, transition: {duration: 1.5}}
      }
    
    return (isOpen) ? (

        <motion.nav 
        layout
        initial = {{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{
          duration: 1,
        }}
        className = 'flex justify-center'>
               < motion.div  
               onClick={() => setIsOpen(!isOpen)}
               initial = {{y: -200}}
               animate = {{y:0}}
               transition ={{duration: 1}}
               className='pt-10 w-[1200px] justify-between items-center space-x-16 fixed  flex  text-white'>
                <h1 className='text-2xl font-bold font-cizel'>Masked Optics <span>Photography</span></h1>
                 
               <motion.div 
               whileHover={{ scale: 1.3 }}
               whileTap={{ scale: 0.9 }}
               data-isOpen={!isOpen}
               className = ' flex items-center cursor-pointer font-bold font-mons space-x-12' > 
               {isOpen ? <h4>Menu</h4> : <h4>Close</h4>}
               <motion.div
               variants={NavVariants}
               whileHover= 'hover'
                >
                <MenuDiamond  className = ' animate-pulse diamond' />
                </motion.div>
                
               </motion.div>
                </motion.div>
                    
          
        </motion.nav>
      )
      
        
      
      : <> <motion.nav 
      layout
      initial = {{opacity: 0}}
      animate={{ opacity: 1}}
      transition={{
          duration: 1,
        }}
        className = 'flex justify-center'>
               < motion.div 
               onClick={resetState} 
               initial = {{y: -200, opacity: 0}}
               animate = {{y: 0, opacity: 1}}
               transition ={{duration: 1}}
               
               className='pt-10 w-[1200px] cursor-pointer font-mons font-bold space-x-12 justify-end items-center z-50 fixed  flex  text-white'>
                 {isOpen ? <h4>Menu</h4> : <motion.h4
                 whileHover={{ scale: 1.5 }}
                 whileTap={{ scale: 0.9 }}
                 >Close</motion.h4>}
                 <motion.div
               variants={NavVariants}
               whileHover= 'hover'
                >
                <MenuDiamond  className = ' animate-pulse diamond' />
                </motion.div>
            </motion.div>
                    
        </motion.nav>
    <motion.nav  
      layout
      initial = {{x:-2000, opacity:-2}}
      animate = {{x:0, opacity: 1}}
      transition={{
        duration: 1,
        layout: { duration: 2 }
      }}
  
      id="menu">
        
    <div id="menu-items">
      <div className="menu-item">Home</div>
      <div className="menu-item">Portfolio</div>
      <div className="menu-item">About</div>
      <div className="menu-item">Contact Us</div>
   
    </div>
    <div id="menu-background-pattern"></div>
    <div id="menu-background-image"></div>
  </motion.nav>
  </>


  
}

export default NavBar