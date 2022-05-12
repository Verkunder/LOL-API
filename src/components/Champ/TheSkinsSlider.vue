<template>
  <div class="champ__slider">
    <swiper class="swiper" :modules="modules" :pagination="{ type: 'progressbar' }">
      <swiper-slide class="slide" v-for="item in dontDevault">
        <h1>{{ item.name }}</h1>
        <div class="champ__slider-skins">
          <img :src="'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + props.champ + '_' + item.num + '.jpg'" :alt="item.name">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import {computed, ref} from "vue";


interface SkinsProps {
  skins: [],
  champ: string
}

const props = defineProps<SkinsProps>()

const skins = ref(props.skins)

const dontDevault = computed(() => {
    const newSkins = skins.value.filter((item) => {
      return item.name !== 'default'
    })
    skins.value = [...newSkins]
  return skins.value
})

const modules = ref([Pagination])

</script>

<style scoped lang="sass">
.champ__slider
    display: flex
    justify-content: center
    align-items: center
    max-width: 1200px
    width: 100%

.swiper
    --swiper-theme-color: #dd364d
</style>