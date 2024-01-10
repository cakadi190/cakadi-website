<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';

interface ErrorState {
  code?: number;
  title?: string;
  image?: string;
  message?: string;
}

const props = withDefaults(defineProps<ErrorState>(), {
  code: undefined,
  image: '/error-state/404.svg',
  title: 'Halaman Yang Anda Akses Tidak Ditemukan!',
  message: 'Maaf, halaman yang kamu akses saat ini sudah tidak ada. Mungkin memang sudah dihapus atau mungkin dipindahkan oleh administrator. Periksa lagi ya ejaan URL kamu...',
});

const statusMessages: Record<number, ErrorState> = {
  401: {
    image: '/error-state/401.svg',
    title: 'Akses Ditolak!',
    message: 'Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Pastikan Anda sudah login dengan akun yang benar.',
  },
  402: {
    image: '/error-state/402.svg',
    title: 'Pembayaran Diperlukan!',
    message: 'Maaf, akses ke halaman ini memerlukan pembayaran. Silakan lakukan pembayaran untuk melanjutkan.',
  },
  403: {
    image: '/error-state/403.svg',
    title: 'Akses Dilarang!',
    message: 'Maaf, Anda tidak diizinkan untuk mengakses halaman ini. Harap hubungi administrator jika Anda merasa ini adalah kesalahan.',
  },
  404: {
    image: '/error-state/404.svg',
    title: 'Halaman Tidak Ditemukan!',
    message: 'Maaf, halaman yang Anda cari tidak ditemukan. Mungkin URL yang Anda masukkan salah atau halaman telah dihapus.',
  },
  405: {
    image: '/error-state/405.svg',
    title: 'Metode Tidak Diperbolehkan!',
    message: 'Maaf, metode akses yang digunakan tidak diizinkan untuk halaman ini.',
  },
  419: {
    image: '/error-state/419.svg',
    title: 'Sesi Berakhir!',
    message: 'Maaf, sesi Anda telah berakhir. Silakan login kembali untuk melanjutkan.',
  },
  425: {
    image: '/error-state/425.svg',
    title: 'Kesalahan dalam Proses!',
    message: 'Maaf, terjadi kesalahan dalam proses. Silakan coba lagi nanti.',
  },
  500: {
    image: '/error-state/500.svg',
    title: 'Kesalahan Internal Server!',
    message: 'Maaf, terjadi kesalahan internal server. Tim teknis kami sedang bekerja untuk memperbaikinya.',
  },
  501: {
    image: '/error-state/501.svg',
    title: 'Fungsionalitas Belum Tersedia!',
    message: 'Maaf, fungsionalitas yang Anda minta belum tersedia. Silakan hubungi administrator.',
  },
  502: {
    image: '/error-state/502.svg',
    title: 'Bad Gateway!',
    message: 'Maaf, gateway tidak valid atau tidak dapat diakses. Silakan coba lagi nanti.',
  },
  503: {
    image: '/error-state/503.svg',
    title: 'Layanan Tidak Tersedia!',
    message: 'Maaf, layanan saat ini tidak tersedia. Silakan coba lagi nanti atau hubungi administrator.',
  },
};

const computedTitle = computed(() => props.code ? statusMessages[props.code]?.title : props.title);
const computedMessage = computed(() => props.code ? statusMessages[props.code]?.message : props.message);
const computedImage = computed(() => props.code ? statusMessages[props.code]?.image : props.image);
</script>

<template>
  <div class="error-state">
    <img class="w-50 mb-3 d-flex mx-auto" :src="computedImage" :alt="computedTitle" />
    <h3>{{ computedTitle }}</h3>
    <p>{{ computedMessage }}</p>
  </div>
</template>

<style scoped lang="scss">
.error-state {
  text-align: center;
}
</style>
