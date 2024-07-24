import { motion } from "framer-motion";
export const Stairs = () => {
  const startAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };

  const reverseIndex = (index: any) => {
    const steps = 8;
    return steps - index - 1;
  };
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={startAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="w-full h-full bg-white-100 relative"
        />
      ))}

    </>
  );
};
