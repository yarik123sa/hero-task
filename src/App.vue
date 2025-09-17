<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import type { ILayouts } from '@/types/Interfaces'

const layouts: ILayouts = {
  main: MainLayout,

}
const route = useRoute()

const layout = computed(() => {
  if (!(typeof route.meta.layout === 'string' && route.meta.layout in layouts)) return
  return layouts[route.meta.layout]
})

</script>

<template>
  <div class="h-screen font-sans font-normal antialiased">
    <component :is="layout">
      <router-view />
    </component>
  </div>

</template>
