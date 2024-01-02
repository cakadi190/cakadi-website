import Swal from 'sweetalert2';
import "@sweetalert2/theme-bootstrap-4";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSweetalert2)
  nuxtApp.provide('swal', Swal)
});