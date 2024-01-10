import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

// Register the package
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomePaginate);
});