"use client"
import { motion, MotionProps } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';


interface MotionDivProps extends MotionProps {
    children?: ReactNode;
    className?: string;
  }

export const MotionFadeInDiv = ({ children, ...props } : MotionDivProps) => {
    return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    {...props}
    >
      {children}
    </motion.div>
}