<script setup lang="ts">
import {useAttrs} from "vue";
import clsx from "clsx";

defineProps<{
  active?: boolean,
}>();

defineOptions({
  inheritAttrs: false
});

const attributes = useAttrs();
</script>

<template>
  <button :class = "clsx(
      'tabs__trigger',
      attributes.class,
      {
        ['tabs__trigger_active']:active
      })"
  >
    <slot>Tab</slot>
  </button>
</template>

<style scoped lang="scss">
  .tabs__trigger{
    padding: 10px 24px;
    background-color: transparent;
    border: 2px solid var(--dark-blue-60);
    color: var(--dark-blue-60);
    border-radius: 24px;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    &:hover{
      background-color: #C6D3EC;
    }
    &_active{
      background-color: var(--dark-blue-100);
      border-color: var(--dark-blue-100);
      color: var(--white);
      &:hover{
        background-color: #144198;
      }
    }
  }
</style>