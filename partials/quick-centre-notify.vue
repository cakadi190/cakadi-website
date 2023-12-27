<script setup lang="ts">
const fakeNotification = [
  { id: 129837129833, title: 'Sample Notification', description: 'Ini adalah sampel notifikasi yang mana akan digantikan oleh notifikasi sungguhan ketika sudah siap digunakan.', created_at: '2023/12/24 15:31:21' },
  { id: 28936789243, title: 'Sample Notification Kedua', description: 'Ini adalah sampel notifikasi yang mana akan digantikan oleh notifikasi sungguhan ketika sudah siap digunakan.', created_at: '2023/12/24 15:31:21' },
  { id: 28936789243, title: 'Sample Notification Kedua', description: 'Ini adalah sampel notifikasi yang mana akan digantikan oleh notifikasi sungguhan ketika sudah siap digunakan.', created_at: '2023/12/24 15:31:21' },
  { id: 28936789243, title: 'Judul Panjuaaaannngg Buanget Gak Kira-Kira', description: 'Ini adalah sampel notifikasi yang mana akan digantikan oleh notifikasi sungguhan ketika sudah siap digunakan.', created_at: '2023/12/24 15:31:21' },
];
</script>

<script lang="ts">
export default {
  name: 'QuickCentreNotify',
};
</script>

<template>
  <div>
    <h5>Notifikasi</h5>

    <ul class="notify-list">
      <li v-for="notify in fakeNotification" class="notify-item" :key="notify.id">
        <div class="notify-header">
          <div class="notify-title">{{ notify.title }}</div>
          <div class="notify-time">{{ $dayjs(notify.created_at).format('DD MMMM YYYY') }}</div>
        </div>
        <p class="mb-0 opacity-75">{{ notify.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.notify-list {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  overflow-y: auto;

  .notify-item {
    background: var(--bs-gray-100);
    padding: 1rem;
    border-radius: var(--bs-border-radius-lg);
    
    @at-root [data-bs-theme=dark] & {
      background: var(--bs-gray-900);
      color: var(--bs-white);

      &.on {
        background: var(--bs-gray-700);
      }
    }

    .notify-header {
      padding-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: .5rem;

      .notify-title {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .notify-time {
      font-weight: 300;
      flex-shrink: 0;
    }
  }
}
</style>