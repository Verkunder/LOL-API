<template>
  <div class="champ__skills">
    <swiper class="swiper" :modules="modules" :scrollbar="{ hide: true }">
      <swiper-slide>
        <div class="champ__skills-item">
          <h1>{{props.champ.passive.name}}</h1>
          {{ props.champ.passive.description }}
          <div class="champ__skills-video">
            <video
                class="champ__skills-video-item"
                :src="
                'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/' +
                newId +
                '/ability_' +
                newId +
                '_P1.webm'
              "
                controls
            ></video>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-for="(item, id) in champs" class="slide" :key="id">
        <div class="champ__skills-item">
          <h1>{{ item.name }} - {{ skillKey[id] }}</h1>
          {{ item.description }}
          <div class="champ__skills-video">
            <video
              class="champ__skills-video-item"
              :src="
                'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/' +
                newId +
                '/ability_' +
                newId +
                '_' +
                skillKey[id] +
                '1.webm'
              "
              controls
            ></video>
          </div>
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

import { computed, ref } from "vue";

interface VideoProps {
  champ: [];
}

const props = defineProps<VideoProps>();

const champs = ref(props.champ.spells);

const modules = ref([Scrollbar]);

const skillId = ref(props.champ.key);

const skillKey = ref(["Q", "W", "E", "R"]);

const newId = computed(() => {
  let replaser = "0000";
  replaser =
    replaser.substring(0, replaser.length - skillId.value.length) +
    skillId.value;
  skillId.value = replaser;
  return skillId.value;
});
</script>

<style lang="sass">

.champ__skills
    padding: 0 0 50px 0
    max-width: 1200px
    width: 100%

    &-item
        padding: 25px 0

    &-video
        display: flex
        justify-content: center
        padding: 30px 0

        &-item
            border-radius: 30px
            box-shadow: 0px 5px 10px 2px rgb(255 0 0 / 20%)
.swiper-scrollbar-drag
    background: linear-gradient(45deg, hsl(37deg, 42%, 40%) 0%, hsl(39deg, 63%, 62%) 100%)

.swiper-scrollbar
    opacity: 1!important
</style>
