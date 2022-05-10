<template>
  <div class="wrapper">
    <div class="champ-list__title">
      Список чемпионов
      <div class="icons-border">
        <svg viewBox="0 0 28 28" class="createSvgIcon__Svg-sc-1l8xi8d-0 loXvaP" style="width: 50px;">
          <title>All champ</title>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 4H8.5C7.11929 4 6 5.11929 6 6.5V15.474C6 15.8033 6.16212 16.1115 6.43347 16.298L13.4335 21.1105C13.7747 21.3451 14.2253 21.3451 14.5665 21.1105L21.5665 16.298C21.8379 16.1115 22 15.8033 22 15.474V6.5C22 5.11929 20.8807 4 19.5 4ZM6 17.8202V19.0235C6 19.5174 6.24318 19.9797 6.65021 20.2595L13.1502 24.7283C13.6621 25.0802 14.3379 25.0802 14.8498 24.7283L21.3498 20.2595C21.7568 19.9797 22 19.5174 22 19.0235V17.8202L14.7365 22.8139C14.2929 23.1189 13.7072 23.1189 13.2635 22.8139L6 17.8202ZM13.8459 13.9359C13.9424 13.8853 14.0576 13.8853 14.1541 13.9359L16.1134 14.962C16.3572 15.0896 16.6416 14.8825 16.5949 14.6113L16.2214 12.4417C16.2028 12.3336 16.2387 12.2234 16.3173 12.147L17.8989 10.6114C18.0967 10.4193 17.9879 10.0837 17.715 10.0442L15.5272 9.72756C15.4191 9.71192 15.3256 9.64414 15.2771 9.54627L14.2977 7.56949C14.1756 7.32319 13.8244 7.32319 13.7023 7.56949L12.7229 9.54627C12.6744 9.64414 12.5809 9.71192 12.4728 9.72756L10.285 10.0442C10.0121 10.0837 9.90333 10.4193 10.1011 10.6114L11.6827 12.147C11.7613 12.2234 11.7972 12.3336 11.7786 12.4417L11.4051 14.6113C11.3584 14.8825 11.6428 15.0896 11.8866 14.962L13.8459 13.9359Z"></path>
        </svg>
      </div>
    </div>
    <TheChampItem v-for="item in champs" :item="item" />
  </div>
</template>

<script setup lang="ts">
import TheChampItem from "@/components/Champ/TheChampItem.vue";
import {computed, ref} from "vue";

interface ChampsProps {
  champs: []
}

const props = defineProps<ChampsProps>()

const page = ref(14)

const champs = ref(props.champs)

const last = computed(() => {
  return Math.ceil(props.champs.length / page.value)
})

</script>

<style lang="sass">
.champ-list__title
    text-align: center
    padding: 40px 0
    font-size: 40px
    font-weight: 700
    display: flex
    justify-content: center
    align-items: center

.all-icons
    width: 32px
    color: #e2e4e9

.icons-border
  -webkit-box-align: center
  align-items: center
  -webkit-box-pack: center
  justify-content: center
  display: flex
  border-radius: 50%
  background: #e2e4e9
  -webkit-box-shadow: 0px 5px 10px 2px rgba(255, 0, 0, 0.2)
  -moz-box-shadow: 0px 5px 10px 2px rgba(255, 0, 0, 0.2)
  box-shadow: 0px 5px 10px 2px rgba(255, 0, 0, 0.2)
  width: 80px
  height: 80px
  margin: 0 15px
</style>