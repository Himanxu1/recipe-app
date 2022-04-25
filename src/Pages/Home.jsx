import Veggi from "../Components/Veggi";
import Popular from "../Components/Popular";
import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
     animate={{opacity : 1}} 
      initial={{opacity:  0}}
      exit = {{opacity:0}}
      transition = {{duration :  0.5}}
    >
        <Veggi/>
        <Popular/>
    </motion.div>
  )
}

export default Home