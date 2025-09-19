<template>
  <div class="relative">
    <swiper
      v-if="items && items.length"
      class=" order-2"
      :modules="modules"
      :slides-per-view="slidesView"
      :slides-per-group="slidesPerGroup"
      :space-between="spaceBetween"
      :loop="loop"
      :loop-fill-group-with-blank="loopFillGroupWithBlank"
      :effect="slideEffect"
      :fade-effect="{ crossFade: true }"
      :initial-slide="slideStart"
      :navigation="navigation ? { nextEl: nextBtnId, prevEl: prevBtnId } : false"
      :breakpoints="breakpoints"
      :pagination="pagination"
      :grid="grid"
      :thumbs="useThumbs ? { swiper: thumbsSwiper } : undefined"

    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="index"
        class="!flex max-md:justify-center"
      >
        <slot
          name="slide"
          :item="item"
          :index="index"
        />
      </swiper-slide>
    </swiper>

    <slot name="navigation" />
    <slot name="pagination" />


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Pagination, Navigation, EffectFade, Autoplay, Grid, Thumbs } from 'swiper/modules'

const thumbsSwiper = ref(null)

const modules = [Pagination, Navigation, EffectFade, Autoplay, Grid, Thumbs]

defineProps<{
  slidesView: number
  spaceBetween: number
  slideEffect: string
  slideStart: number
  loop?: boolean
  items: any[]
  required: false
  default: () => []
  pagination?: Record<string, any>
  navigation?: boolean
  breakpoints?: Record<string, any>
  slidesPerGroup?: number
  grid?: Record<string, any>
  loopFillGroupWithBlank?: boolean
  nextBtnId?: string
  prevBtnId?: string
  useThumbs?: boolean
}>()

</script>

<style scoped>

</style>
