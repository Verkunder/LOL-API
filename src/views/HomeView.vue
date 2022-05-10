<template>
  <TheChampList v-if="success" :champs="data" />
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";
import TheChampList from "@/components/Champ/TheChampList.vue";

const data = ref([])
const success = ref(false)

const load = async () => {
  await axios
      .get(`https://ddragon.leagueoflegends.com/cdn/12.8.1/data/ru_RU/champion.json`)
      .then(response => (data.value = response.data.data))
  success.value = true
}

onMounted(() => {
  load()
})

</script>

<style scoped>

</style>