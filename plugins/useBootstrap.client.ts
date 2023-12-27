import * as bootstrap from 'bootstrap';

/**
 * Integerate Bootstrap With Nuxt 3
 * 
 * @see https://stackoverflow.com/a/76234360/17911271
 * @see https://stackoverflow.com/a/73375997/17911271
 */
export default defineNuxtPlugin(({ provide, app }) => {
  provide('bootstrap', bootstrap);

  // Auto Config Popover and tooltip
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

  popoverTriggerList.forEach((popover) => {
    new bootstrap.Popover(popover);
  });
  tooltipTriggerList.forEach((tooltip) => {
    new bootstrap.Tooltip(tooltip, {
      trigger: 'hover',
    });
  });
});
