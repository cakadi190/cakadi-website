<script setup lang="ts">
const portoProps = withDefaults(defineProps<{ limit?: number; page?: number }>(), {
  limit: undefined,
  page: 1
});

const router = useRouter();
const route = useRoute();
const currentPage = ref((route.query.page ? parseInt(route.query.page as string) : 1) || 1);

const onClickHandler = async (page: number) => {
  await router.push({ name: 'portofolio', query: { page: page > 1 ? page : undefined } });
  await refresh();
};

const { data, pending, error, refresh } = await useLarafetch<PaginationResponse<Portofolio>>(
  () => `/v1/portofolio?${serializeArray(portoProps)}`, 
  {
    server: false,
    watch: [currentPage],
  }
);
</script>

<script lang="ts">
import { serializeArray } from '~/utils/url'; 
import CardLoaderComponent from '~/components/loader/card.vue';
import CardPortofolioShow from '~/components/card-portofolio.vue';

export default {
  name: 'PortofolioSection',
};
</script>

<template>
  <!-- If this pending -->
  <div class="row" v-if="pending">
    <div class="col-md-4 mb-3 mb-md-0" v-for="item in 3" :key="item">
      <card-loader-component />
    </div>
  </div>
  <!-- Else Not -->
  <div class="row equal" v-else>
    <div class="col-md-6 mx-auto" v-if="error">
      <error-state title="Maaf, ada kesalahan dari peladen!" message="Maaf ya ada kesalahan ketika memanggil ke peladen. Coba lagi nanti ya!" />
    </div>
    <template v-else-if="!error && Object.keys(data?.data ?? {}).length > 0">
      <div class="col-md-4 mb-3" v-for="(item, index) in data?.data" :key="index">
        <card-portofolio-show :data="item" />
      </div>
    </template>
    <div class="col-md-5 mt-4 mx-auto" v-else-if="!error && Object.keys(data?.data ?? {}).length === 0">
      <error-state title="Maaf, Datanya lagi kosong!" message="Tenang, nanti aku isi kok! Mungkin prosesnya agak lama karena ngumpulin data itu susah loh wkwkwk." />
    </div>
    <div class="col-md-6 mx-auto" v-else>
      <error-state title="Maaf, ada kesalahan dari peladen!" message="Maaf ya ada kesalahan ketika memanggil ke peladen. Coba lagi nanti ya!" />
    </div>
  </div>
  
  <!-- If has the limit -->
  <div class="mx-auto d-flex justify-content-center mt-3" v-if="typeof portoProps.limit === 'number' && !pending && Object.keys(data?.data ?? {}).length > 0">
    <nuxt-link :to="{ name: 'portofolio' }" class="btn btn-outline-primary">Lihat Semua <Icon name="fa6-solid:arrow-right" /></nuxt-link>
  </div>
  <!-- Else not -->
  <vue-awesome-paginate
    v-else-if="!pending && Object.keys(data?.data ?? {}).length > 0"
    class="w-full d-flex justify-content-center"
    :total-items="data?.total"
    v-model="currentPage"
    :items-per-page="12"
    :max-pages-shown="5"
    :on-click="onClickHandler"
    :show-breakpoint-buttons="false"
  >
    <template #prev-button>
      <Icon name="fa6-solid:arrow-left" />
    </template>
    <template #next-button>
      <Icon name="fa6-solid:arrow-right" />
    </template>
  </vue-awesome-paginate>
</template>

<style lang="scss">
.pagination-container {
	display: flex;
	column-gap: .5rem;
}
.paginate-buttons {
	height: 40px;
	width: 40px;
	border-radius: 20px;
	cursor: pointer;
	color: $gray-900;
	transition: all .2s;
	background-color: $gray-200;
	border: 1px solid $gray-400;
  
  @at-root [data-bs-theme=dark] & {
    background-color: $gray-800;
    border: 1px solid $gray-700;
    color: $white;
  }
  
	&:hover {
    background-color: $gray-300;

    @at-root [data-bs-theme=dark] & {
      background-color: $gray-700;
    }
	}
}
.active-page {
	background-color: $primary;
	border: 1px solid $primary;
	color: $white;
  
  @at-root [data-bs-theme=dark] & {
    background-color: $gray-100;
    border: 1px solid $gray-200;
    color: $gray-900;
  }

	&:hover {
		background-color: darken($primary, 10%);
		border-color: darken($primary, 10%);
  
    @at-root [data-bs-theme=dark] & {
      background-color: $gray-400;
      border: 1px solid $gray-500;
    }
	}
}
</style>