<template>
  <div class="relative">
    <swiper
      v-if="items && items.length"
      class="w-full order-2"
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

    <swiper
      v-if="useThumbs"
      class="!overflow-visible thumbs-swiper"
      :space-between="10"
      :slides-per-view="4"
      :loop="false"
      :allow-touch-move="false"
      watch-slides-visibility
      watch-slides-progress
      @swiper="onThumbsSwiper"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="'thumb-' + index"
        class="!w-[120px]"
      >
        <slot
          name="thumb"
          :item="item"
          :index="index"
        />
      </swiper-slide>
    </swiper>
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
  pagination?: boolean | { clickable: boolean }
  navigation?: boolean
  breakpoints?: Record<string, any>
  slidesPerGroup?: number
  grid?: Record<string, any>
  loopFillGroupWithBlank?: boolean
  nextBtnId?: string
  prevBtnId?: string
  useThumbs?: boolean
}>()

const onThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}
</script>

<style scoped>
.swiper-button-next::after,
.swiper-button-prev::after {
  display: none !important;
}

.thumbs-swiper :deep(.swiper-slide) {
  opacity: 0.5;
  cursor: pointer;
}

.thumbs-swiper :deep(.swiper-slide-thumb-active) {
  opacity: 1;
}

.thumbs-swiper :deep(.swiper-wrapper) {
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 30px;
}
</style>
