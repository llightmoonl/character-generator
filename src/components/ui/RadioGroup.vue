<script setup lang="ts">
import RadioGroupItem from "./RadioGroupItem.vue";

const props = defineProps<{
  elements: Array<{id: number, type: string, url: string, alt: string}>,
  activeElement: {id: number, type: string, url: string, alt: string}
}>()

</script>

<template>
<form class = "radio-group">
  <RadioGroupItem
      v-for = "element in props.elements"
      :name = "element.type"
      :id = "element.id"
      :checked = "element.id === activeElement.id"
  ><img :alt = "element.alt" :src="element.url"/>
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