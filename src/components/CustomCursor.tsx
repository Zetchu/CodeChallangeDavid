import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursorStore } from '../state/cursorStore';
import { useEffect } from 'react';

const CustomCursor = () => {
  const { isActive, text } = useCursorStore();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 40,
  });
  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 40,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 40);
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);
  return (
    <motion.div
      className='fixed top-0 left-0 z-[9999] px-12 py-4  rounded-full text-sm font-semibold flex items-center justify-center pointer-events-none shadow-lg'
      style={{
        backgroundColor: '#685DC5',
        color: '#fff',
        x: springX,
        y: springY,
        opacity: isActive ? 0.8 : 0,
        transformOrigin: ' center',
      }}
      animate={{
        scaleX: isActive ? 1 : 0,
        opacity: isActive ? 0.8 : 0,
      }}
      transition={{
        scaleX: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      {text}
    </motion.div>
  );
};

export default CustomCursor;
