import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { MenuDiamond } from './Icons/MenuDiamond';

const NavPopUp = (props) => {


useEffect (() =>{
    const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });
})
const [isOpen, setIsOpen] = useState(false);

return (props.trigger) ? (
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
    <motion.div 
    data-isOpen={isOpen}
           className='diamond'>
             <MenuDiamond  onClick = {() => props.setTrigger(false)} />
    </motion.div>
 
  </div>
  <div id="menu-background-pattern"></div>
  <div id="menu-background-image"></div>
  {props.children}
</motion.nav>
  
  ) : '';
}

export default NavPopUp