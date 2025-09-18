<script setup lang="ts">
import Slider from '@/components/Common/Slider.vue'
import FeatureCard from '@/components/Common/FeatureCard.vue'
import { IFeatureCard } from '@/types/Interfaces/feature-card'

defineProps<{ data: IFeatureCard[] }>()

</script>

<template>
  <div>
    <Slider
      :slides-view="1"
      :space-between="0"
      slide-effect="Slide"
      :slide-start = "0"
      :items="data"
      :loop="true"
      :required="false"
      :default="() => []"
      :pagination="{ el: '.custom-pagination', clickable: true }"

    >
      <template #slide="{ item }">
        <FeatureCard :data="item" />
      </template>
    </Slider>

    <div class="custom-pagination mt-5 flex "/>
  </div>
</template>
