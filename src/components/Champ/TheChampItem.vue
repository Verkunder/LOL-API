<template>
  <div class="champ">
    <div class="champ__liner"></div>
    <div class="champ__main">
      {{props.item}}
    </div>
  </div>
</template>

<script setup lang="ts">

interface ChampProps {
  item: []
}

const props = defineProps<ChampProps>()

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
</style>