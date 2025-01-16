<script setup lang="ts">
import TabTrigger from "../ui/TabTrigger.vue";

const props = defineProps<{
  items: Array<object>,
  activeTab: object,
  handleTab: Function,
}>();

</script>

<template>
  <ul class = "tabs">
    <li
        v-for="item in props.items"
        :key="item.id"
    >
      <TabTrigger @click-tab="handleTab(item)" :active = "activeTab.id === item.id">{{item.type}}</TabTrigger>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .tabs{
    list-style-type: none;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    max-width: 435px;
  }
</style>