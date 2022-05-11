<template>
  <div class="champ" @click="onPush(props.item.id)">
    <div class="champ__liner"></div>
    <div class="champ__main">
      <img class="champ__image" :src="'http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/' + props.item.image.full">
      <div class="champ__info">
        <div class="champ__info-title"> {{props.item.name}} - {{props.item.title}} </div>
        <div class="champ__history">
          {{props.item.blurb}}
        </div>
        <div class="champ__tag">
          <div class="champ__tag-title"> Роль: </div>
          <div class="champ__tag-container" >
            <div></div>
            <div class="champ__tag-item" v-for="item in props.item.tags">
              <img class="champ__tag-icon" :src="'src/assets/icons/' + item + '.svg'" :alt="item">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

interface ChampProps {
  item: []
}

const router = useRouter()

const props = defineProps<ChampProps>()

const onPush = (idx: string) => {
  router.push({name: 'champs', params: {id: idx}})
  console.log(idx)
}

</script>

<style lang="sass">
.champ
    position: relative
    display: flex
    flex-direction: row
    width: 100%
    border-radius: 12px
    box-sizing: border-box
    margin: calc(0.25*5rem) 0
    cursor: pointer

    &:hover
        .champ__liner
            opacity: 0.7
            background: red

    &__liner
        border-radius: 5px 0 0 5px
        min-width: calc(0.25*2rem)
        min-height: calc((0.25*1rem) * 41)
        margin-right: calc(0.25*1rem)
        background: #181a20
        transition: 0.3s ease-in-out
        opacity: 1

    &__main
        display: flex
        padding: calc(0.25*6rem)
        background: #181a20
        width: 100%
        align-items: flex-start
        border-radius: 0 5px 5px 0

    &__image
        background-size: 115%
        flex-shrink: 0
        position: relative
        margin-right: calc(0.25 * 1rem)
        width: calc(0.25 * 14rem)
        height: calc(0.25 * 14rem)
        background-position: center center
        background-repeat: no-repeat
        background-color: #07090e
        border-radius: calc(0.25 * 1.5rem)
        z-index: 1

    &__info
        padding: 0 40px

        &-title
            padding: 0px 5px 0 15px
            font-weight: 700
            font-size: calc(0.25 * 6rem)
            line-height: calc(0.25 * 9rem)
            letter-spacing: -0.009em

    &__history
        padding: 15px

    &__tag
        padding: 15px

        &-title
            font-size: calc(0.25 * 5.5rem)
            font-weight: 600

        &-container
            display: flex
            padding: 5px 0

        &-item
            padding: 0 10px 0 0

        &-icon
            width: 35px

</style>