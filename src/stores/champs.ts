import { defineStore } from 'pinia'

export const useChampsStore = defineStore({
  id: 'champs',
  state: () => ({
    onPage: 1
  }),
  getters: {
    /*doubleCount: (state) => state.counter * 2*/
  },
  actions: {
    increment() {
      /*this.counter++*/
    }
  }
})
