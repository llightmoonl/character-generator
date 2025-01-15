<script setup lang="ts">

const props = defineProps<{
  width?: string,
  height?: string
}>();
</script>

<template>
<canvas class = "canvas" :width="width" :height="height" >

</canvas>
</template>

<style scoped lang="scss">
.canvas {
  background-color: #D2D2D2;
}
</style>