import Swal from 'sweetalert2';
import "@sweetalert2/theme-bootstrap-4";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('swal', Swal)
});