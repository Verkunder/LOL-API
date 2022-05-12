<template>
  <div class="champ__skills">
    <swiper class="swiper" :modules="modules" :scrollbar="{ hide: true }">
      <swiper-slide v-for="item in champs" class="slide">
        <div class="champ__skills-item">
          <h1>{{ item.name }}</h1>
<!--          {{ props.champ }}
          <video
            :src="
              'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/' +
              '0' +
              props.champ.key +
              '/ability_' +
              '0' +
              props.champ.key +
              '_P1.webm'
            "
            controls
            autoplay
          ></video>-->
          {{ item.description }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";

import { ref } from "vue";

interface VideoProps {
  champ: [];
}

const props = defineProps<VideoProps>();

const champs = ref(props.champ.spells);

const modules = ref([Scrollbar]);
</script>

<style lang="sass">

.champ__skills
    padding: 0 0 50px 0
    max-width: 1200px
    width: 100%

    &-item
        padding: 25px 0
.swiper-scrollbar-drag
    background: linear-gradient(45deg, hsl(37deg, 42%, 40%) 0%, hsl(39deg, 63%, 62%) 100%)
</style>
