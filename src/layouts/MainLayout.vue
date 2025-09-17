<script setup lang="ts">
import Header from '@/components/Common/Header.vue'

</script>

<template>
  <div class="min-h-screen flex flex-col   pt-[83px] xs:pt-[129px] xl:pt-[200px]">
    <Header />

    <main class="flex-grow ">
      <div class="flex h-full">
        <div class="flex flex-col flex-1 py-6 px-4 md:px-8 overflow-y-auto">
          <router-view />
        </div>
      </div>
    </main>


  </div>
</template>
