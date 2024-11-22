import * as bootstrap from 'bootstrap';
import $ from 'jquery';

declare global {
  interface Window {
    bootstrap: typeof import('bootstrap'),
    $: typeof import('jquery'),
    jQuery: typeof import('jquery'),
  }
}

window.bootstrap = bootstrap;
window.$ = window.jQuery = $;

document.addEventListener('DOMContentLoaded', initTooltipsAndPopovers);
document.addEventListener('turbo:load', initTooltipsAndPopovers);

function initTooltipsAndPopovers() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.forEach(popoverTriggerEl => {
    new bootstrap.Popover(popoverTriggerEl);
  });
}
