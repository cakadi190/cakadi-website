<template>
  <section class="need-space-sm container">
    <div class="row">
      <div class="col-md-4 mb-4 mb-md-0">
        <featured-card 
          title="Cepat & Tanggap" 
          icon-color="#fcd34d"
          description="Mengerjakan proyek dengan cepat dan tanggap terhadap perubahan"
        >
          <template #icon>
            <Icon :style="{
              width: '1.25rem',
              height: '1.25rem',
              display: 'block !important',
            }" name="material-symbols:clock-loader-10" />
          </template>
        </featured-card>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
        <featured-card 
          title="Catchy & Simpel" 
          icon-color="#f87171"
          description="Membuat tampilan website yang catchy dan simpel untuk dilihat dan digunakan."
        >
          <template #icon>
            <Icon :style="{
              width: '1.25rem',
              height: '1.25rem',
              display: 'block !important',
            }" name="fa6-solid:eye" />
          </template>
        </featured-card>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
        <featured-card 
          title="Rapi & Teroptimasi" 
          icon-color="#4ade80"
          description="Membuat tampilan website yang catchy dan simpel untuk dilihat dan digunakan."
        >
          <template #icon>
            <Icon :style="{
              width: '1.25rem',
              height: '1.25rem',
              display: 'block !important',
            }" name="fa6-solid:eye" />
          </template>
        </featured-card>
      </div>
    </div>
  </section>
</template>