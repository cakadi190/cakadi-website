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
