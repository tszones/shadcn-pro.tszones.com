"use client"

import { motion } from "framer-motion"
 
export const MotionBlurInDiv = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}