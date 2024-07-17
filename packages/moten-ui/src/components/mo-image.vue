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
  <div>
    <h1 class="title">123</h1>
    <img class="image" :src="src" alt="image">
  </div>
</template>

<style scoped>
.image {
  width: 300px;
  height: 200px;
  margin: 0 auto;
}
.title {
  font-size: 50px;
  color: red;
}
@container (max-width: 600px) {
  .title {
    font-size: 20px;
    color: #ffff00;
  }
}
</style>
