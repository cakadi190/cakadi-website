type useSecurityTypes = {
  antiXssHijacking: (str: string) => string;
};

/**
 * Hook yang digunakan untuk mencegah XSS dan security lainnya.
 *
 * Fungsi `antiXssHijacking` digunakan untuk menghapus tag `<script>` dari string yang diberikan.
 * Fungsi ini berguna untuk mencegah XSS yang terjadi karena adanya tag `<script>` yang tidak diinginkan.
 *
 * @example
 * import { useSecurity } from '~/hooks/useSecurity';
 *
 * const { antiXssHijacking } = useSecurity();
 *
 * const safeString = antiXssHijacking('<p>Hello, <script>alert("XSS");</script> world!</p>');
 * // safeString akan menjadi "<p>Hello,  world!</p>"
 *
 * @returns {useSecurityTypes} An object containing:
 * - Object yang berisi fungsi `antiXssHijacking`.
 */
const useSecurity = (): useSecurityTypes => {
  /**
   * Fungsi yang digunakan untuk menghapus tag `<script>` dari string yang diberikan.
   *
   * @param {string} str - String yang ingin dihapus tag `<script>`-nya.
   * @returns {string} - String yang sudah dihapus tag `<script>`-nya.
   */
  const antiXssHijacking = (str: string): string => {
    return str.replace(/<script.*?<\/script>/gi, '');
  };

  return { antiXssHijacking };
};

export default useSecurity;

