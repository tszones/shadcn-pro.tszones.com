"use client"
import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';


interface MotionFadeInFromBottomProps extends MotionProps {
    children?: ReactNode;
    className?: string;
  }

export const MotionFadeInFromBottom = ({ children, ...props } : MotionFadeInFromBottomProps) => {
    return <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          {...props}
    >
      {children}
    </motion.div>
}