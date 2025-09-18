<script setup lang="ts">
import { IFeatureCard } from '@/types/Interfaces/feature-card'

defineProps<IFeatureCard>()


</script>

<template>
  <div class="w-[340px]">
    <div class="translate-y-6 md:flex justify-center hidden">
      <img
        :src="image"
        :alt="alt"/>
    </div>
    <div class="mb-4 ">
      <div class=" flex items-center bg-primary-white backdrop-blur-sm rounded-[45px] p-3">
        <div class="flex items-center justify-center w-8 h-8 bg-primary-dark-gray rounded-full text-primary-white font-archivo text-base leading-[140%] font-semibold ">
          {{step}}
        </div>
        <div class="text-xl text-primary-dark-gray text-center flex-1 font-gilroy font-semibold">
          {{title}}
        </div>
      </div>
    </div>
    <div class="bg-primary-white backdrop-blur-sm rounded-[45px]  py-5 pt-7 px-7">
      <div class="">
        <div class="font-extrabold mb-3 text-xl text-primary-dark-gray ">
          {{description.title}}
        </div>
        <div class="text-primary-medium-gray">
          {{description.text}}
        </div>
      </div>
    </div>
  </div>
</template>
