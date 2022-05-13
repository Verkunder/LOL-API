<template>
  <div class="wrapper">
    <div class="champ__main">
      <div class="champ__detail">
        <a @click="router.back()" class="button back">
          <svg
            width="80%"
            height="80%"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0016 47.8996C10.8016 47.8996 0.101562 37.1996 0.101562 23.9996C0.101562 10.7996 10.8016 0.0996094 24.0016 0.0996094C37.2016 0.0996094 47.9016 10.7996 47.9016 23.9996C47.9016 37.1996 37.2016 47.8996 24.0016 47.8996ZM24.0016 2.69962C12.3016 2.69962 2.70156 12.2996 2.70156 23.9996C2.70156 35.6996 12.3016 45.2996 24.0016 45.2996C35.7016 45.2996 45.3016 35.6996 45.3016 23.9996C45.3016 12.2996 35.7016 2.69962 24.0016 2.69962Z"
              fill="white"
            />
            <path
              d="M24.5008 37.6989L10.8008 23.9988L24.5008 10.2988L26.3008 12.1989L14.6008 23.9988L26.3008 35.7988L24.5008 37.6989Z"
              fill="white"
            />
            <path
              d="M12.7031 22.5996H36.7031V25.3996H12.7031V22.5996Z"
              fill="white"
            />
          </svg>
        </a>
        <div class="champ__detail-name">
          {{ champ.name }} - {{ champ.title }}
        </div>
        <div class="champ__detail-image">
          <img
            class="champ__detail-image-item"
            :src="
              'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
              champ.id +
              '_0.jpg'
            "
            :alt="champ.name"
          />
        </div>
        <div class="champ__detail-history">
          {{ champ.lore }}
        </div>
        <TheChampInfo v-if="success" :champ="champ" />
        <TheChampSkills v-if="success" :champ="champ" />
        <div class="champ__skins">
          <TheSkinsSlider
            v-if="success"
            :champ="champId"
            :skins="champ.skins"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";
import TheSkinsSlider from "@/components/Champ/TheSkinsSlider.vue";
import TheChampInfo from "@/components/Champ/TheChampInfo.vue";
import TheChampSkills from "@/components/Champ/TheChampSkills.vue";

const router = useRouter();
const champ = ref([]);
const champId = ref(router.currentRoute._value.params.id);
const success = ref(false);
const video = ref([])

onMounted(async () => {
  await axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/12.9.1/data/ru_RU/champion/${champId.value}.json`
    )
    .then((response) => (champ.value = response.data.data[champId.value]));
  success.value = true;
});
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
