/**
 * Komponen untuk menampilkan tooltip menggunakan Bootstrap 5
 * Menggunakan `window.bootstrap` untuk menginisialisasi dan menghancurkan tooltip
 * Tidak perlu menggunakan `useEffect` untuk menginisialisasi tooltip
 *
 * @param {TooltipProps<T>} props - Properti yang disediakan oleh Bootstrap 5
 * @param {T} [as='div'] - Tipe komponen yang akan digunakan untuk render
 * @returns {JSX.Element} Komponen yang akan dirender
 *
 * @example
 * <Tooltip title="Hai, saya adalah tooltip">
 *   <span>Klik saya</span>
 * </Tooltip>
 *
 * @example
 * <Tooltip as="a" href="/url" title="Hai, saya adalah tooltip">
 *   <span>Klik saya</span>
 * </Tooltip>
 */
import React, { useEffect } from "react";

type ElementType<P = any> = {
  [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
}[keyof JSX.IntrinsicElements];

type PropsOf<T extends ElementType> = JSX.IntrinsicElements[T];

/**
 * Properti yang disediakan oleh komponen Tooltip
 * @interface TooltipOwnProps
 */
interface TooltipOwnProps<T extends ElementType> {
  /**
   * Tipe komponen yang akan digunakan untuk render
   */
  as?: T;
  /**
   * Class yang akan digunakan untuk komponen
   */
  className?: string;
  /**
   * Judul yang akan ditampilkan di tooltip
   */
  title?: string;
  /**
   * Konten yang akan ditampilkan di tooltip
   */
  children: React.ReactNode;
}

/**
 * Properti yang disediakan oleh Bootstrap 5
 * @interface TooltipProps
 */
type TooltipProps<T extends ElementType> = TooltipOwnProps<T> &
  Omit<PropsOf<T>, keyof TooltipOwnProps<T>>;

/**
 * Komponen untuk menampilkan tooltip menggunakan Bootstrap 5
 * @function Tooltip
 */
function Tooltip<T extends ElementType = 'div'>({
  as,
  children,
  ...props
}: TooltipProps<T>) {
  const Component = (as || 'div') as ElementType;

  useEffect(() => {
    const initTooltips = () => {
      const tooltipTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach((el) => {
        new (window as any).bootstrap.Tooltip(el);
      });
    };

    const destroyTooltips = () => {
      document.querySelectorAll(".tooltip").forEach((el) => {
        const tooltipInstance = (window as any).bootstrap.Tooltip.getInstance(el);
        if (tooltipInstance) {
          tooltipInstance.dispose();
        }
      });
    };

    initTooltips();
    return () => destroyTooltips();
  }, []);

  return React.createElement(Component, {
    "data-bs-toggle": "tooltip",
    ...props,
    children
  });
}

Tooltip.displayName = "Tooltip";

export default Tooltip;

