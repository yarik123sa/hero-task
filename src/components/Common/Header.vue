<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/Shared/BaseButton.vue'

const open = ref(false)
const toggle = () => {
  open.value = !open.value
}
const close = () => {
  open.value = false
}
</script>

<template>
  <div class="relative">
    <header class="fixed inset-0 bg-[url('/src/assets/images/up.png')] bg-no-repeat bg-center bg-cover">
      <div class="relative z-10" >
        <div class="py-[34px]">
          <div class="container">
            <div class="relative z-10 grid grid-cols-2 items-center md:flex">
              <router-link to="/home">
                <img
                  src="../../assets/images/logo.png"
                  alt="logo"
                  class="justify-self-start"
                />
              </router-link>

              <nav
                class="hidden md:block md:absolute md:left-1/2 md:-translate-x-1/2 bg-secondary-medium-white py-1 px-3 text-[13px] rounded-full text-primary-muted"
              >
                <div class="flex gap-4 items-center">
                  <router-link
                    class="active"
                    to="/home"
                    >Home
                  </router-link>
                  <router-link to="#">About</router-link>
                  <router-link to="#">How it works</router-link>
                  <router-link to="#">Token design</router-link>
                  <router-link to="#">YARD flywheel</router-link>
                </div>
              </nav>
              <BaseButton
                view="primary"
                class="block xl:hidden ml-auto btn "
              >
                Connect
              </BaseButton>

              <button
                aria-label="Toggle menu"
                :aria-expanded="open"
                class="relative z-10 md:hidden justify-self-end inline-flex items-center rounded-full p-2"
                @click="toggle"
              >
                <span class="relative block h-5 w-6">
                  <span
                    :class="[
                      'absolute left-0 top-0 block h-[3px] rounded-sm w-6 bg-secondary-gray-medium transition-transform duration-200',
                      open ? 'translate-y-[8px] rotate-45  w-6' : '',
                    ]"
                  />
                  <span
                    :class="[
                      'absolute left-[25%] top-1/2 block h-[3px] w-[11px] rounded-sm -translate-y-1/2 bg-secondary-gray-medium transition-opacity duration-200',
                      open ? 'opacity-0 ' : 'opacity-100 ',
                    ]"
                  />
                  <span
                    :class="[
                      'absolute left-0 bottom-0 block h-[3px] w-6  rounded-sm bg-secondary-gray-medium  transition-transform duration-200',
                      open ? '-translate-y-[10px] -rotate-45 ' : '',
                    ]"
                  />
                </span>
              </button>

            </div>


          </div>
        </div>

        <transition name="menu">
          <div
            v-if="open"
            class="absolute left-0 top-0  w-full bg-secondary-medium-white p-6 text-primary-muted shadow-xl h-screen"
            @click="close"
          >
            <div
              class=""
              @click.stop
            >
              <div class="pt-[100px] flex flex-col gap-4 text-[15px] container">
                <router-link
                  to="/home"
                  class="active"
                  @click="close"
                  >Home
                </router-link>
                <router-link
                  to="#"
                  @click="close"
                  >About
                </router-link>
                <router-link
                  to="#"
                  @click="close"
                  >How it works
                </router-link>
                <router-link
                  to="#"
                  @click="close"
                  >Token design
                </router-link>
                <router-link
                  to="#"
                  @click="close"
                  >YARD flywheel
                </router-link>


                <BaseButton
                  view="primary"
                  class="block "
                >
                  Connect
                </BaseButton>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </header>
  </div>
</template>

<style scoped>
.active {
  @apply bg-primary-black p-2.5 rounded-full font-semibold text-primary-white;
}

@media (max-width: 768px) {
  .active {
    @apply bg-transparent text-primary-black p-0 text-sm;
  }
  .btn{
    display: none;
  }
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-to,
.menu-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
