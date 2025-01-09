<script setup lang="ts">
import Button from "./components/ui/Button.vue";
import Tabs from "./components/shared /Tabs.vue";
import Container from "./components/shared /Container.vue";

const tabsData = [
  {id: 1, text: 'Hair'},
  {id: 2, text: 'Eyes'},
  {id: 3, text: 'Ears'},
  {id: 4, text: 'Nose'},
  {id: 5, text: 'Mouth'},
  {id: 6, text: 'Background'},
  {id: 7, text: 'Accessories'},
]
</script>

<template>
  <div class="generator">
    <Container>
      <h1 class="generator__title">Character Generator</h1>
      <div class="generator__content">
        <div class="generator__left">
          <div class="avatar">tyntyn</div>
        </div>
        <div class="generator__right">
          <h2 class = "generator__subtitle">Customize Look</h2>
          <Tabs class="generator__tabs" :items="tabsData"/>
        </div>
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
  .generator{
    height: 100vh;
    display: flex;
    align-items: center;
    &__content{
      margin-top: 56px;
      display: flex;
    }
    &__right{
      margin-left: 80px;
    }
    &__tabs{
      margin-top: 24px;
    }
  }
</style>
