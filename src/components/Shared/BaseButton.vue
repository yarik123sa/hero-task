<script setup lang="ts">
const props = defineProps<{
  view?: 'primary' | 'secondary'
  disabled?: boolean
  size?:"full"
}>()
</script>

<template>
  <button
    :disabled="props.disabled"
    :class="[
      'text-base font-medium rounded-full px-[17px] py-2.5 transition duration-150 ease-in-out active:outline focus:outline-1',
      props.view === 'primary'
        ? props.disabled
          ? 'bg-gray-400 text-white cursor-not-allowed'
          : 'bg-[#2D2D2D] text-white hover:bg-primary-gray active:bg-primary-black'
        : props.disabled
          ? 'bg-gray-200 text-gray-400 border border-gray-300 cursor-not-allowed'
          : 'bg-[#E6E8EC] text-black border border-black hover:bg-gray-300 active:bg-gray-400',

        props.size === 'full' ? 'w-full' : '',
        props.view === 'secondary' ? 'bg-light-white border-none' : ''
    ]"
  >
    <slot />
  </button>
</template>
