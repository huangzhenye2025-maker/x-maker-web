"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, yOffset = 50, duration = 0.6 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: duration, delay: delay, type: "spring", stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
