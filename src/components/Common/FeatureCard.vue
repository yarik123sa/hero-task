<script setup lang="ts">
import { IFeatureCard } from '@/types/Interfaces/feature-card'

defineProps<{ data: IFeatureCard }>()
</script>

<template>
  <div class="xl:w-[340px] max-md:w-[340px] flex justify-between items-center  max-xl:flex-1 min-h-full lg:gap-28 gap-16  xl:block">
    <div class="flex max-xl:justify-center flex-col flex-1 min-h-full">
      <div class="translate-y-6 flex justify-center max-xl:hidden max-md:flex h-full max-md:max-h-44">
        <img
          :src="data.image"
          :alt="data.alt"/>
      </div>
      <div class=" flex mb-4 items-center bg-primary-white backdrop-blur-sm rounded-[45px] p-3 xl:flex-1 min-h-full ">
        <div class="flex items-center justify-center w-8 h-8 bg-primary-dark-gray rounded-full text-primary-white font-archivo text-base leading-[140%] font-semibold ">
          {{data.step}}
        </div>
        <div class="text-xl text-primary-dark-gray text-center flex-1 font-gilroy font-semibold">
          {{data.title}}
        </div>
      </div>
      <div class="bg-primary-white backdrop-blur-sm rounded-[45px]  py-5 pt-7 px-7 min-h-full xl:flex-1 md:flex-grow-0 flex-1">
        <div class="font-extrabold mb-3 text-xl text-primary-dark-gray ">
          {{data.description.title}}
        </div>
        <div class="text-primary-medium-gray">
          {{data.description.text}}
        </div>
      </div>
    </div>
    <div class="xl:hidden md:block hidden  flex-[0_1_30%]">
      <img
        :src="data.image"
        :alt="data.alt"
        class="w-full"
      />
    </div>
  </div>
</template>
