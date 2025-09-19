<script setup lang="ts">
import Header from '@/components/Common/Header.vue'

</script>

<template>
  <div class="flex flex-col min-h-screen pt-[83px] xs:pt-[129px] xl:pt-[200px] relative before:content-['']  before:absolute before:inset-0  before:[mix-blend-mode:color-dodge] before:bg-[url('/src/assets/images/up.png')] before:bg-no-repeat before:bg-top before:md:bg-contain  before:-z-10">
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
