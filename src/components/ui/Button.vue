<script setup lang="ts">

const props = defineProps<{
  variant?: string,
}>();

</script>

<template>
  <button
    class="button"
    :class="props.variant === 'secondary' && 'button__secondary'">
    <slot>Send</slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  width: 100%;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: var(--dark-blue-100);
  color: var(--white);
  border: none;
  padding: 14px 36px;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #144198;
  }

  &__secondary {
    background-color: transparent;
    border: 1px solid var(--black-60);
    color: var(--black-60);

    &:hover {
      background-color: var(--gray);
    }
  }
}
</style>