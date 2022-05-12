<template>
  <div class="wrapper">
    <div class="champ__main">
      <div class="champ__detail">
        <a @click="router.back()" class="button back">
          Back
        </a>
        <div class="champ__detail-name">{{champ.name}} - {{champ.title}}</div>
        <div class="champ__detail-image">
          <img class="champ__detail-image-item" :src="'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champ.id + '_0.jpg'" :alt="champ.name">
        </div>
        <div class="champ__detail-history">
          {{champ.lore}}
        </div>
        <TheChampInfo v-if="success" :champ="champ" />
        <div class="champ__skins">
          <TheSkinsSlider v-if="success" :champ="champId" :skins="champ.skins" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";
import TheSkinsSlider from "@/components/Champ/TheSkinsSlider.vue";
import TheChampInfo from "@/components/Champ/TheChampInfo.vue";

const router = useRouter()
const champ = ref([])
const champId = ref(router.currentRoute._value.params.id)
const success = ref(false)

onMounted(async () => {
  await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.9.1/data/ru_RU/champion/${champId.value}.json`)
        .then(response => champ.value = response.data.data[champId.value])
  success.value=true
})

</script>

<style lang="sass">
.champ
    &__detail
        padding: 0 0 0 1rem

        &-image
            height: auto
            display: flex
            justify-content: center
            align-items: center

            &-item
                border-radius: 15px
                -webkit-box-shadow: 0px 5px 10px 2px rgba(255, 0, 0, 0.2)
                -moz-box-shadow: 0px 5px 10px 2px rgba(255, 0, 0, 0.2)
                box-shadow: 0px 5px 10px 2px rgba(255, 0, 0, 0.2)

        &-history
              padding: 1.5rem 1rem
              font-size: 18px
              letter-spacing: 1.5px
              line-height: 1.5
              text-indent: 20px
        &-name
              font-size: 44px
              display: flex
              align-items: center
              justify-content: center
              padding: calc(0.25 * 6rem) 0
              font-weight: 700

    &__info
          padding: 0 0 50px 0

          &-item
                display: flex
                flex-direction: column

                &-span
                    padding: 5px 0
          &-skill
                display: inline-block
                width: 40px
                height: 15px
                padding-right: 5px
                background-color: #dd364d
                background-clip: content-box
                transform: skewX(-40deg)
                opacity: 1


.back
    width: 100px
    height: 50px
    border-radius: 5px
</style>