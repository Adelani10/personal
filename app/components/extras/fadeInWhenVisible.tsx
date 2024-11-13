"use client"

// components/FadeInWhenVisible.js
import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
    whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default FadeInWhenVisible;
