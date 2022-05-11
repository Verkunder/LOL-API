<template>
  <button @click="router.back()"> Back </button>
  <div>
    {{champ}}
  </div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";

const router = useRouter()
const champ = ref([])
console.log(router.currentRoute._value.params.id)

onMounted(async () => {
  await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/${router.currentRoute._value.params.id}.json`)
        .then(response => champ.value = response.data.data)
})

</script>

<style scoped>

</style>