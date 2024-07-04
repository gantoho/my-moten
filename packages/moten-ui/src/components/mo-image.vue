<script lang='ts'>
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'MoImage',
  props: {
    src: String,
  },
  data() {
    return {
      value: 11
    }
  },
  mounted() {
    console.log(this.value)
  }
})
</script>

<template>
  <img :src="src" alt="">
</template>

<style scoped>
img {
  width: 300px;
  height: 400px;
}
</style>
