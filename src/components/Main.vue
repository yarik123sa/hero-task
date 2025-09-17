<script setup lang="ts">

import BaseButton from '@/components/Shared/BaseButton.vue'

</script>

<template>
  <section class="relative z-2">
    <div class="container">
      <div class="flex items-center mb-20">
        <div>
          <div class="text-[90px] font-archivo font-semibold leading-[110%] mb-4">
            The yield-backed
            stablecoin protocol
            boosting DeFi liquidity
          </div>
          <div class="text-2xl text-primary-semi-black text-gilroy">
            Keep your yield working for you — we keep your liquidity accessible
          </div>
        </div>
        <div class="flex-[0_1_80%]">
          <img
            src="@/assets/images/leaf-logo.png"
            alt="Logo"
          />
        </div>
      </div>
      <div class="flex gap-5">
        <BaseButton
          class="px-28"
          view="primary"
        >Join Whitelist</BaseButton>
        <BaseButton
          class="px-16"
          view="secondary"
        >Read Docs</BaseButton>
      </div>
    </div>
  </section>
</template>
