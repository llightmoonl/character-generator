<script setup lang="ts">
import {ref} from "vue";
import TabTrigger from "../ui/TabTrigger.vue";

defineProps<{
  items: Array
}>();

const id = ref(1);

const handleTab = (item) => {
  id.value = item.id;
}

</script>

<template>
  <ul class = "tabs">
    <li
        v-for="item in items"
        :key="item.id"
    >
      <TabTrigger @click-tab="handleTab(item)" :active = "id === item.id">{{item.text}}</TabTrigger>
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