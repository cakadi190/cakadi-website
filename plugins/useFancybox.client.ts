import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default defineNuxtPlugin(({ provide }) => {
  provide("fancybox", Fancybox.bind('[data-fancybox]'));
});