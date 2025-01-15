<script setup lang="ts">
import RadioGroupItem from "./RadioGroupItem.vue";
</script>

<template>
<form class = "radio-group">
  <RadioGroupItem
      name = "tab"
      id = "tab"
      checked><img alt = "hair" src="../../assets/hair/hair-1.svg"/></RadioGroupItem>
  <RadioGroupItem
      name = "tab"
      id = "tab1"><img alt = "hair" src="../../assets/hair/hair-2.svg"/></RadioGroupItem>
  <RadioGroupItem
      name = "tab"
      id = "tab2"><img alt = "hair" src="../../assets/hair/hair-3.svg"/></RadioGroupItem>
  <RadioGroupItem
      name = "tab"
      id = "tab3"
      ><img alt = "hair" src="../../assets/hair/hair-4.svg"/></RadioGroupItem>
  <RadioGroupItem
      name = "tab"
      id = "tab4"><img alt = "hair" src="../../assets/hair/hair-5.svg"/></RadioGroupItem>
  <RadioGroupItem
      name = "tab"
      id = "tab5"><img alt = "hair" src="../../assets/hair/hair-6.svg"/></RadioGroupItem>
</form>
</template>

<style scoped lang="scss">
.radio-group {
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
}
</style>