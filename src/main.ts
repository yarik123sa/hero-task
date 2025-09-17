import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Icon from '@/components/Common/Icon.vue'
import BaseButton from '@/components/Shared/BaseButton.vue'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

const app = createApp(App)

app.use(router)
app.component('Icon', Icon)


app.component('BaseButton', BaseButton)

app.mount('#app')
