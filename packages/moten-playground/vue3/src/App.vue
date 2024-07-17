<script setup lang="ts">
import { ref } from 'vue'
import moten from "@moten/ui";

const { MoImage } = moten

const width = ref('')
const changeWidth = () => {
  width.value = '300px'
}
</script>

<template>
  <div class="container" :style="{ width: width}">
    <mo-image
      src="https://baidu.com/favicon.ico"
      @click="changeWidth"
    ></mo-image>
  </div>
</template>

<style scoped>
.container {
  container-type: inline-size;
  width: 100vw;
}
</style>
