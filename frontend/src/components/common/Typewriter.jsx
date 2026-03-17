import React from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text }) => {
  const letters = Array.from(text);
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
  };
  const letterVariants = {
    initial: { opacity: 0, display: "none" },
    animate: { 
      opacity: 1, 
      display: "inline-block",
      transition: { duration: 0.01, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }
    }
  };

  return (
    <motion.div variants={containerVariants} initial="initial" animate="animate" className="inline-flex flex-wrap items-baseline break-words">
      {letters.map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[4px] h-[0.8em] bg-cyan-500 ml-2 shadow-[0_0_10px_rgba(34,211,238,1)]"
      />
    </motion.div>
  );
};

export default Typewriter;