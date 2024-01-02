import * as bootstrap from 'bootstrap';

/**
 * Integerate Bootstrap With Nuxt 3
 * 
 * @see https://stackoverflow.com/a/76234360/17911271
 * @see https://stackoverflow.com/a/73375997/17911271
 */
export default defineNuxtPlugin(({ provide }) => {
  provide('bootstrap', bootstrap);

  new bootstrap.Tooltip(document.body, { selector: "[data-bs-toggle='tooltip']" });
  new bootstrap.Popover(document.body, { selector: "[data-bs-toggle='popover']" });
});
