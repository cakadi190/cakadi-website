import type Swal from "sweetalert2";

declare module "#app" {
  interface NuxtApp {
    $swal: Swal;
  }
}