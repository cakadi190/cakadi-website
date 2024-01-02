/**
 * Calculates and returns the appropriate text color (black or white) based on the provided background color.
 *
 * @param {string} bgColor - The background color in hexadecimal format (#RRGGBB).
 * @returns {string} - The calculated text color in hexadecimal format (#RRGGBB).
 */
const getTextColor = (bgColor: string): string => {
  /**
   * Converts a hexadecimal color code to its RGB equivalent.
   *
   * @param {string} hex - The hexadecimal color code.
   * @returns {number[]} - An array representing the RGB values.
   */
  const hexToRgb = (hex: string): number[] => {
    let bigint = parseInt(hex.substring(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return [r, g, b];
  };

  /**
   * Calculates the luminance of an RGB color.
   *
   * @param {number} r - The red component of the color (0 to 255).
   * @param {number} g - The green component of the color (0 to 255).
   * @param {number} b - The blue component of the color (0 to 255).
   * @returns {number} - The calculated luminance value.
   */
  const calculateLuminance = (r: number, g: number, b: number): number => {
    let adjustColor = (v: number): number =>
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);

    let [red, green, blue] = [r, g, b].map((v) => adjustColor(v / 255));

    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  };

  // Extract RGB components from the background color
  let [r, g, b] = hexToRgb(bgColor);

  // Calculate the luminance of the background color
  let luminance = calculateLuminance(r, g, b);

  // Return the appropriate text color based on luminance
  return luminance > 0.75 ? '#000000' : '#FFFFFF';
};

// Export the getTextColor function
export { getTextColor };
