import cn from "@/utils/tailwind";

import { motion } from 'framer-motion'

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={cn("flex justify-center items-center ", classNames)}
    >
      <Component />
    </motion.div>
  )
}

export default MotionWrap
