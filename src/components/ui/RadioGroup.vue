<script setup lang="ts">
import RadioGroupItem from "./RadioGroupItem.vue";

const props = defineProps<{
  items: Array<string>;
}>()
console.log(props.items);
</script>

<template>
<form class = "radio-group">
  <RadioGroupItem
      v-for = "item in props.items"
      :name = "item.type"
      :id = "item.id"
      checked><img :alt = "item.alt" src="../../assets/hair/hair-1.svg"/>
  </RadioGroupItem>
</form>
</template>

<style scoped lang="scss">
.radio-group {
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
}
</style>