// src/lib/animations.ts
import { Variants } from "framer-motion"

export const fadeInUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
  },
})

export const slideLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  },
})

export const slideRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  },
})

export const zoomIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
  },
})
