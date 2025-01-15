<script setup lang="ts">
const props = defineProps<{
  id: string,
  name: string,
  checked?: boolean,
}>()
</script>

<template>
  <div class="radio">
    <input
           class = "radio__input"
           :name = "props.name"
           :id = "props.id" type = "radio"
           :checked = "checked"
    />
    <label class = "radio__label" :for = "props.id"><slot></slot></label>
  </div>
</template>

<style scoped lang="scss">
  .radio{
    position: relative;
    &__input{
      display: none;
    }
    &__label{
      font-size: 1.8rem;
      .radio__input:checked ~ &::after{
        content: url('../../assets/icons/check.svg');
        top: -29px;
        right: 0;
        position: absolute;
        width: 24px;
        height: 24px;
        background-color: var(--gray);
        border-radius: 50%;
        z-index: 0;
      }
    }
  }
</style>