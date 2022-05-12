<template>
  <div class="navigate">
      <div class="navigate__container">
        <div class="navigate__logo">
          <div class="navigate__logo-container">
            <img class="navigate__logo-item" src="https://blitz-cdn-plain.blitz.gg/blitz/ui/images/icons/games/small/LOL-small.svg" alt="logo">
            <div class="navigate__logo-title">League of Legends</div>
          </div>

          <nav class="navigate__link">
            <router-link to="/" class="navigate__link-item">
                <img class="navigate__link-icon" src="/src/assets/icons/home.svg" alt="Home" />
                <div class="navigate__link-content">Домой</div>
            </router-link>
            <router-link to="/about" class="navigate__link-item" href="#">
              <img class="navigate__link-icon" src="/src/assets/icons/stat.svg" alt="Statistick" />
              <div class="navigate__link-content">Статистика</div>
            </router-link>
            <router-link to="/" class="navigate__link-item" href="#">
              <img class="navigate__link-icon" src="/src/assets/icons/bild.svg" alt="Build" />
              <div class="navigate__link-content">Билды</div>
            </router-link>
          </nav>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<style lang="sass">
.navigate
    display: flex
    flex-direction: column
    flex-shrink: 0
    width: calc((0.25 * 1rem) * 67)
    background: #0c0e13
    border-right: 1px solid #181a20
    z-index: 10
    user-select: none

    &__container
        background: radial-gradient( circle at 0px 0px,hsla(352deg 71% 54% / 0.15),transparent 115px )
        flex: 1 1 0%
        padding: calc(0.25 * 4rem) calc(0.25 * 3.5rem) 0
        user-select: none

    &__logo
        display: flex
        flex-direction: column
        position: fixed

        &-container
            margin-bottom: calc(0.25 * 2rem)
            background: #13151b
            box-shadow: inset 0 1px hsla(222deg 6% 30% / 0.15)
            border: none
            cursor: pointer
            padding: 10px
            display: flex
            justify-content: center
            align-items: center

        &-item
            display: block
            width: calc(0.25 * 7rem)
            height: calc(0.25 * 7rem)

        &-title
            padding: 0 10px
            font-weight: 600

    &__link
        display: flex
        flex-direction: column

        &-item
            --text-color: #7e828b
            box-sizing: border-box
            position: relative
            display: flex
            -webkit-box-align: center
            align-items: center
            height: calc(0.25 * 12rem)
            width: calc(((0.25 * 1rem) * 67) - ((0.25 * 3.5rem) * 2))
            padding: 0 calc(0.25 * 3rem)
            color: #7e828b
            border-radius: 5px
            transition: 0.3s
            opacity: 1
            text-decoration: none

            &:hover
                opacity: 0.75

        &-icon
            width: calc(0.25 * 7rem)
            height: calc(0.25 * 7rem)
            display: block

        &-content
            position: absolute
            display: flex
            -webkit-box-align: center
            align-items: center
            left: calc(0.25 * 7rem)
            margin-left: calc(0.25 * 6.5rem)
            flex: 1 1 0%
            overflow: hidden
            white-space: nowrap


</style>