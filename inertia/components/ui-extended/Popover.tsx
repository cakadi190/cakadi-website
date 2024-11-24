/**
 * Komponen untuk menampilkan popover menggunakan Bootstrap 5
 * Menggunakan `window.bootstrap` untuk menginisialisasi dan menghancurkan popover
 * Tidak perlu menggunakan `useEffect` untuk menginisialisasi popover
 *
 * @param {PopoverProps<T>} props - Properti yang disediakan oleh Bootstrap 5
 * @param {T} [as='div'] - Tipe komponen yang akan digunakan untuk render
 * @returns {JSX.Element} Komponen yang akan dirender
 *
 * @example
 * <Popover title="Hai, saya adalah popover" content="Saya adalah konten popover" placement="top">
 *   <span>Klik saya</span>
 * </Popover>
 *
 * @example
 * <Popover as="a" href="/url" title="Hai, saya adalah popover" content="Saya adalah konten popover" placement="bottom">
 *   <span>Klik saya</span>
 * </Popover>
 */
import React, { useEffect } from "react";

type ElementType<P = any> = {
  [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
}[keyof JSX.IntrinsicElements];

type PropsOf<T extends ElementType> = JSX.IntrinsicElements[T];

/**
 * Properti yang disediakan oleh komponen Popover
 * @interface PopoverOwnProps
 */
interface PopoverOwnProps<T extends ElementType> {
  /**
   * Tipe komponen yang akan digunakan untuk render
   */
  as?: T;
  /**
   * Class yang akan digunakan untuk komponen
   */
  className?: string;
  /**
   * Judul yang akan ditampilkan di popover
   */
  title?: string;
  /**
   * Konten yang akan ditampilkan di popover
   */
  content?: string;
  /**
   * Konten yang akan ditampilkan di popover
   */
  children: React.ReactNode;
  /**
   * Posisi yang akan digunakan untuk menampilkan popover
   */
  placement?: "top" | "bottom" | "left" | "right";
}

/**
 * Properti yang disediakan oleh Bootstrap 5
 * @interface PopoverProps
 */
type PopoverProps<T extends ElementType> = PopoverOwnProps<T> &
  Omit<PropsOf<T>, keyof PopoverOwnProps<T>>;

/**
 * Komponen untuk menampilkan popover menggunakan Bootstrap 5
 * @function Popover
 */
function Popover<T extends ElementType = 'div'>({
  as,
  children,
  placement = "top",
  ...props
}: PopoverProps<T>) {
  const Component = (as || 'div') as ElementType;

  useEffect(() => {
    const initPopovers = () => {
      const popoverTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="popover"]')
      );
      popoverTriggerList.forEach((el) => {
        new (window as any).bootstrap.Popover(el, {
          placement,
        });
      });
    };

    const destroyPopovers = () => {
      document.querySelectorAll(".popover").forEach((el) => {
        const popoverInstance = (window as any).bootstrap.Popover.getInstance(el);
        if (popoverInstance) {
          popoverInstance.dispose();
        }
      });
    };

    initPopovers();
    return () => destroyPopovers();
  }, [placement]);

  return React.createElement(Component, {
    "data-bs-toggle": "popover",
    ...props,
    children
  });
}

Popover.displayName = "Popover";

export default Popover;

