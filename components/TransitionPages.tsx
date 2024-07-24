"use client";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
export const TransitionPages = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed h-screen w-screen bg-black-100 z-30 top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};
