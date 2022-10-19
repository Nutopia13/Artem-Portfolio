import React from 'react'
import NavPopUp from './NavPopUp'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuDiamond } from './Icons/MenuDiamond'
import { Close } from './Icons/Close'


const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav 
    initial = {{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{
      duration: 1,
    }}
    className = 'flex'>
           <NavPopUp  layout trigger={isOpen} se /> 
           < motion.div  
           initial = {{x:-1000}}
           animate = {{x:0}}
           transition ={{duration: 1}}
           className='pt-10 w-[1200px] justify-end items-center space-x-16 fixed  flex  text-white'>
             {isOpen ? <h4>Menu</h4> : <h4>Close</h4>}
           <motion.div 
           
           data-isOpen={isOpen} >

           {!isOpen ? <MenuDiamond onClick={() => setIsOpen(!isOpen)}  /> : <Close onClick = {() => isOpen(!isOpen)} />} 

            
           </motion.div>
            </motion.div>
                
      
    </motion.nav>
  )
}

export default NavBar