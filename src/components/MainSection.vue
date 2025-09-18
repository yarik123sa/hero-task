<script setup lang="ts">
import BaseButton from '@/components/Shared/BaseButton.vue'
</script>

<template>
  <section class="relative z-1">
    <div class="container">
      <div class="flex items-center mb-10 md:mb-20 justify-between gap-4">
        <div>
          <div class="text-[58px] md:text-[76px] xl:text-[90px] font-archivo font-semibold max-w-[1100px] leading-[110%] mb-4">
            The yield-backed stablecoin protocol boosting
            <span class="  flex md:inline gap-4">
              DeFi
              <img
                src="@/assets/images/leaf-logo.png"
                alt="Leaf logo"
                class="w-[60px] h-[60px] block md:hidden"
              />
            </span>
            liquidity
          </div>
          <div class="text-2xl text-primary-semi-black text-gilroy">Keep your yield working for you — we keep your liquidity accessible</div>
        </div>
        <div class=" hidden md:block">
          <img
            src="@/assets/images/leaf-logo.png"
            alt="leaf-Logo"
          />
        </div>
      </div>

      <div class="flex gap-5 xs:max-w-[558px]">
        <BaseButton
          view="primary"
          class="w-full xs:min-w-[329px]"
          >Join Whitelist
        </BaseButton>
        <BaseButton
          class="px-16"
          size="full"
          view="secondary"
          >Read Docs
        </BaseButton>
      </div>
    </div>
  </section>
</template>
