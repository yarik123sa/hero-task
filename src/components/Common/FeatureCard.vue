<script setup lang="ts">
import { IFeatureCard } from '@/types/Interfaces/feature-card'

defineProps<{ data: IFeatureCard }>()
</script>

<template>
  <div class="xl:w-[340px] md:flex justify-between items-center   lg:gap-28 gap-16  xl:block">
    <div class="">
      <div class="translate-y-6 flex justify-center max-xl:hidden max-md:flex h-full">
        <img
          :src="data.image"
          :alt="data.alt"/>
      </div>
      <div class="mb-4 ">
        <div class=" flex items-center bg-primary-white backdrop-blur-sm rounded-[45px] p-3 h-full">
          <div class="flex items-center justify-center w-8 h-8 bg-primary-dark-gray rounded-full text-primary-white font-archivo text-base leading-[140%] font-semibold ">
            {{data.step}}
          </div>
          <div class="text-xl text-primary-dark-gray text-center flex-1 font-gilroy font-semibold">
            {{data.title}}
          </div>
        </div>
      </div>
      <div class="bg-primary-white backdrop-blur-sm rounded-[45px]  py-5 pt-7 px-7">
        <div class="">
          <div class="font-extrabold mb-3 text-xl text-primary-dark-gray ">
            {{data.description.title}}
          </div>
          <div class="text-primary-medium-gray">
            {{data.description.text}}
          </div>
        </div>
      </div>
    </div>
    <div class="xl:hidden md:block hidden lg:flex-[0_1_50%] flex-[0_1_55%]">
      <img
        :src="data.image"
        :alt="data.alt"
        class="w-full"
      />
    </div>
  </div>
</template>
