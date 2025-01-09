<script setup lang="ts">
import clsx from "clsx";
import {useAttrs} from "vue";

defineProps<{
  variant?: string,
}>();

defineOptions({
  inheritAttrs: false
});

const attributes = useAttrs();
</script>

<template>
  <button :class = "clsx(
      'button',
      attributes.class,
      {
        ['button__secondary']:variant === 'secondary'
      }
      )">
    <slot>Send</slot>
  </button>
</template>

<style lang="scss" scoped>
  .button{
    font-size: 1.6rem;
    font-weight: 700;
    background-color: var(--dark-blue-100);
    color: var(--white);
    border: none;
    padding: 14px 36px;
    border-radius: 12px;
    cursor: pointer;
    &:hover{
      background-color: #144198;
    }
    &__secondary{
      background-color: var(--light-gray);
      border: 1px solid var(--black-60);
      color: var(--black-60);
      &:hover{
        background-color: var(--gray);
      }
    }
  }
</style>