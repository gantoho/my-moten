<script setup lang="ts">
import EditHeader from '@/components/edit/edit-header.vue'
import EditRender from '@/components/edit/edit-block.vue'
import EditConfig from '@/components/edit/edit-render.vue'
import EditBlock from '@/components/edit/edit-config.vue'
</script>

<template>
  <div class="edit">
    <edit-header />
    <div class="container">
      <edit-block />
      <edit-render />
      <edit-config />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.edit {
  width: 100%;
  overflow-x: hidden;
  user-select: none;
  --edit-header-height: 64px;
  --edit-block-width: 300px;
  .container {
    display: flex;
    width: 100%;
    min-width: 100%;
    &.mobile-background {
      background: var(--color-bg);
    }
  }
}
</style>
