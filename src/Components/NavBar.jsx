import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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


      const NavVariants = {
        hover: {rotate: 180, transition: {duration: 1.5}}
      }


     
      
    
    return (
        <>
        <motion.nav 
        initial = {{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{
          duration: 1,
        }}
        className = 'flex justify-center md:min-w-[1200px]'
        >
               < motion.div
               layout  
               initial = {{y: -200}}
               animate = {{y:0}}
               transition ={{duration: 1}}
               className='pt-6 lg:pt-10  max-w-[370px] md:min-w-[1200px] space-x-12  justify-between  items-center z-50  fixed  flex  text-white'>
                <h1 className=' lg:text-2xl max-w-[200px] lg:max-w-full font-bold font-cizel'>Masked Optics <span>Photography</span></h1>
                 
               <motion.div 
               
               data-isOpen={!isOpen} 
               onClick={() => setIsOpen(!isOpen)}
               className = ' flex items-center cursor-pointer font-bold font-mons space-x-4 md:space-x-6'  > 
               {isOpen ? <motion.h4 
               whileHover={{ scale: 1.3 }}
               whileTap={{ scale: 1 }}
               className='lg:text-2xl'>Menu</motion.h4> : <motion.h4
               whileHover={{ scale: 1.3 }}
               whileTap={{ scale: 1 }}
               className='lg:text-2xl'>Close</motion.h4>}
               <motion.div
               variants={NavVariants}
               whileHover= 'hover'
                >
                <MenuDiamond  className = ' max-w-[30px] md:max-w-full animate-pulse diamond' />
                </motion.div>
                
               </motion.div>
                </motion.div>
                    
          
        </motion.nav>
   
      
        
      
       
        <AnimatePresence>
        {!isOpen && ( 
        
      

    <motion.nav  
      initial = {{x:-1000, opacity: 0}}
      animate = {{x:0, opacity: 1}}
      transition={{
        duration: 1,
        layout: { duration: 2 }
      }}
      exit = {{x: -1000, opacity: 0}}
      
      
  
      id="menu">
        
       
    <motion.ul
    id="menu-items"
    className='text-[40px] lg:text-[60px]'>
      <motion.li className="menu-item">Home</motion.li>
      <motion.li className="menu-item">Portfolio</motion.li>
      <motion.li className="menu-item">About</motion.li>
      <motion.li className="menu-item">Contact Us</motion.li>
   
    </motion.ul>
    <div id="menu-background-pattern"></div>
    <div id="menu-background-image"></div>

   </motion.nav>


)}
</AnimatePresence>

  </>

  )


  
}

export default NavBar