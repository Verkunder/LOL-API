<template>
  <div class="champ__info">
    <h1>Характеристики</h1>
    <div class="champ__info-item" v-if="champ.stats">
      <span class="champ__info-item-span">Здоровье - {{champ.stats.hp}}</span>
      <span class="champ__info-item-span">Здоровье за уровень - {{champ.stats.hpperlevel}}</span>
      <span class="champ__info-item-span" v-if="champ.stats.mp">Мана - {{champ.stats.mp}}</span>
      <span class="champ__info-item-span" v-if="champ.stats.mpperlevel">Мана за уровень - {{champ.stats.mpperlevel}}</span>
      <span class="champ__info-item-span">Скорость передвижения - {{champ.stats.movespeed}}</span>
      <span class="champ__info-item-span">Броня - {{champ.stats.armor}}</span>
      <span class="champ__info-item-span">Броня за уровень - {{champ.stats.armorperlevel}}</span>
      <span class="champ__info-item-span">Сопротивление магии - {{champ.stats.spellblock}}</span>
      <span class="champ__info-item-span">Сопротивление магии за уровень - {{champ.stats.spellblockperlevel}}</span>
      <span class="champ__info-item-span">Радиус атаки - {{champ.stats.attackrange}}</span>
      <span class="champ__info-item-span">Регенирация здоровья - {{champ.stats.hpregen}}</span>
      <span class="champ__info-item-span">Регенирация здоровья за уровень - {{champ.stats.hpregenperlevel}}</span>
      <span class="champ__info-item-span" v-if="champ.stats.mpregen">Регенирация маны - {{champ.stats.mpregen}}</span>
      <span class="champ__info-item-span" v-if="champ.stats.mpregenperlevel">Регенирация маны за уровень - {{champ.stats.mpregenperlevel}}</span>
      <span class="champ__info-item-span" v-if="champ.stats.crit">Шанс критического урона - {{champ.stats.crit}}</span>
      <span class="champ__info-item-span" v-if="champ.stats.critperlevel">Шанс критического урона за уровень - {{champ.stats.critperlevel}}</span>
      <span class="champ__info-item-span">Начальный урон - {{champ.stats.attackdamage}}</span>
      <span class="champ__info-item-span">Урон за уровень - {{champ.stats.attackdamageperlevel}}</span>
      <span class="champ__info-item-span">Скорость атаки - {{champ.stats.attackspeedperlevel}}</span>
      <span class="champ__info-item-span">Скорость атаки за уровень - {{champ.stats.attackspeed}}</span>
      <span class="champ__info-item-span"> Сложность </span>
      <div class="champ__info-item-span">
        <span class="champ__info-skill" v-for="item in champ.info.difficulty"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

interface InfoProps {
  champ: []
}

const props = defineProps<InfoProps>()

const champ = ref(props.champ)


</script>

<style scoped>

</style>