import { defineStore } from 'pinia'

export const useEditStore = defineStore('edit', {
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    setCount() {
      this.count++
    }
  }
})
