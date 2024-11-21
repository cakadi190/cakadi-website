import React from 'react';
import { motion, Variants } from 'motion/react';

/**
 * Tipe properti umum untuk komponen animasi geser
 * @interface SlideProps
 */
interface SlideProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

/**
 * Komponen animasi geser ke kiri dengan Framer Motion
 * Menghasilkan efek pergerakan dari kanan ke kiri
 *
 * @component
 * @param {SlideProps} props - Properti untuk komponen SlideLeft
 * @returns {React.ReactElement} Komponen animasi geser ke kiri
 * @example
 * <SlideLeft>
 *   <div>Konten yang akan dianimasikan</div>
 * </SlideLeft>
 */
export const SlideLeft: React.FC<SlideProps> = ({
  children,
  className = '',
  duration = 0.5,
  delay = 0
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration,
        delay,
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Komponen animasi geser ke kanan dengan Framer Motion
 * Menghasilkan efek pergerakan dari kiri ke kanan
 *
 * @component
 * @param {SlideProps} props - Properti untuk komponen SlideRight
 * @returns {React.ReactElement} Komponen animasi geser ke kanan
 * @example
 * <SlideRight>
 *   <div>Konten yang akan dianimasikan</div>
 * </SlideRight>
 */
export const SlideRight: React.FC<SlideProps> = ({
  children,
  className = '',
  duration = 0.5,
  delay = 0
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration,
        delay,
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Komponen animasi geser ke atas dengan Framer Motion
 * Menghasilkan efek pergerakan dari bawah ke atas
 *
 * @component
 * @param {SlideProps} props - Properti untuk komponen SlideUp
 * @returns {React.ReactElement} Komponen animasi geser ke atas
 * @example
 * <SlideUp>
 *   <div>Konten yang akan dianimasikan</div>
 * </SlideUp>
 */
export const SlideUp: React.FC<SlideProps> = ({
  children,
  className = '',
  duration = 0.5,
  delay = 0
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration,
        delay,
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Komponen animasi geser ke bawah dengan Framer Motion
 * Menghasilkan efek pergerakan dari atas ke bawah
 *
 * @component
 * @param {SlideProps} props - Properti untuk komponen SlideDown
 * @returns {React.ReactElement} Komponen animasi geser ke bawah
 * @example
 * <SlideDown>
 *   <div>Konten yang akan dianimasikan</div>
 * </SlideDown>
 */
export const SlideDown: React.FC<SlideProps> = ({
  children,
  className = '',
  duration = 0.5,
  delay = 0
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: -32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration,
        delay,
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Komponen animasi geser dengan fade ke kiri dengan Framer Motion
 * Menghasilkan efek pergerakan dan fade dari kanan ke kiri
 *
 * @component
 * @param {SlideProps} props - Properti untuk komponen SlideFadeLeft
 * @returns {React.ReactElement} Komponen animasi geser fade ke kiri
 * @example
 * <SlideFadeLeft>
 *   <div>Konten yang akan dianimasikan</div>
 * </SlideFadeLeft>
 */
export const SlideFadeLeft: React.FC<SlideProps> = ({
  children,
  className = '',
  duration = 0.5,
  delay = 0
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration,
        delay,
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Komponen animasi geser dengan fade ke kanan dengan Framer Motion
 * Menghasilkan efek pergerakan dan fade dari kiri ke kanan
 *
 * @component
 * @param {SlideProps} props - Properti untuk komponen SlideFadeRight
 * @returns {React.ReactElement} Komponen animasi geser fade ke kanan
 * @example
 * <SlideFadeRight>
 *   <div>Konten yang akan dianimasikan</div>
 * </SlideFadeRight>
 */
export const SlideFadeRight: React.FC<SlideProps> = ({
  children,
  className = '',
  duration = 0.5,
  delay = 0
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration,
        delay,
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Komponen animasi geser dengan fade ke atas dengan Framer Motion
 * Menghasilkan efek pergerakan dan fade dari bawah ke atas
 *
 * @component
 * @param {SlideProps} props - Properti untuk komponen SlideFadeUp
 * @returns {React.ReactElement} Komponen animasi geser fade ke atas
 * @example
 * <SlideFadeUp>
 *   <div>Konten yang akan dianimasikan</div>
 * </SlideFadeUp>
 */
export const SlideFadeUp: React.FC<SlideProps> = ({
  children,
  className = '',
  duration = 0.5,
  delay = 0
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration,
        delay,
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Komponen animasi geser dengan fade ke bawah dengan Framer Motion
 * Menghasilkan efek pergerakan dan fade dari atas ke bawah
 *
 * @component
 * @param {SlideProps} props - Properti untuk komponen SlideFadeDown
 * @returns {React.ReactElement} Komponen animasi geser fade ke bawah
 * @example
 * <SlideFadeDown>
 *   <div>Konten yang akan dianimasikan</div>
 * </SlideFadeDown>
 */
export const SlideFadeDown: React.FC<SlideProps> = ({
  children,
  className = '',
  duration = 0.5,
  delay = 0
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: -32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration,
        delay,
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
