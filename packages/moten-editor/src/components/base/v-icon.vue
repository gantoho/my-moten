<script setup lang="ts">
import iconConfig, { type ConfigIcon } from '@/config/icon'
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
})

const iconSrc = computed(() => iconConfig[props.icon as ConfigIcon])
</script>

<template>
  <Icon :icon="iconSrc" />
</template>

<style lang="scss" scoped></style>
