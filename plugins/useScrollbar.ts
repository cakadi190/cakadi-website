import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

/**
 * Perfect Scrollbar initialization
 * 
 * @see https://stackoverflow.com/a/75863902/17911271
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PerfectScrollbar);
});
