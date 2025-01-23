<script setup lang="ts">

import {ref, watch, onMounted} from "vue";
import {useRouter} from 'vue-router';
import {Download, Shuffle} from "lucide-vue-next";

import axios from "axios";

import RadioGroup from "./components/ui/RadioGroup.vue"
import Button from "./components/ui/Button.vue";
import Canvas from "./components/ui/Canvas.vue";
import Tabs from "./components/shared/Tabs.vue";
import Container from "./components/shared/Container.vue";

const router = useRouter();

const tabs = ref([]);
const activeTab = ref({});
const elements = ref([]);
const activeElement = ref({});

const handleTab = (item: object) => {
  activeTab.value = item;
  router.replace({name: 'home', query: {type: activeTab.value.type}});
}

const getElements = async() => {
  try{
    const elementsResponse = await
      axios.get(`${import.meta.env.VITE_API_URL}/elements?type=${activeTab.value.type}`);
    return elementsResponse.data;
  }
  catch (error){
    throw error;
  }
}

onMounted(async () => {
  const tabsResponse = await axios.get(`${import.meta.env.VITE_API_URL}/tabs`);
  tabs.value = tabsResponse.data;

  activeTab.value = tabs.value[0];
  elements.value = await getElements();

  activeElement.value = elements.value[0];
})

watch(activeTab,async () => {
  try{
    elements.value = await getElements();
  }
  catch(error){
    console.error(`Ошибка сети: ${error}`);
  }
})
</script>

<template>
  <div class="generator">
    <Container>
      <h1 class="generator__title">Character Generator</h1>
      <div class="generator__content">
        <div class="generator__left">
          <div class="generator__avatar">
            <Canvas width = "513" height = "546" />
          </div>
          <div class="generator__buttons">
            <Button class = "generator__button">
              <Shuffle width = "20" height = "20"/>
              <span class="button__text">Random</span>
            </Button>
            <Button class = "generator__button" variant = "secondary">
              <Download width = "20" height = "20"/>
              <span class="button__text">Download</span>
            </Button>
          </div>
        </div>
        <div class="generator__right">
          <h2 class = "generator__subtitle">Customize Look</h2>
          <Tabs
              class="generator__tabs"
              :items="tabs"
              :activeTab="activeTab"
              :handleTab="handleTab"
          />
          <RadioGroup
              class="generator__radios"
              :elements="elements"
              :activeElement="activeElement"
          />
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
    &__title,
    &__subtitle{
      user-select: none;
    }
    &__content{
      margin-top: 56px;
      display: grid;
      grid-template-columns: 512px 1fr;
      column-gap: 80px;
    }
    &__tabs{
      margin-top: 24px;
    }
    &__buttons{
      margin-top: 32px;
      display: flex;
      column-gap: 20px;
    }
    &__button{
      display: flex;
      column-gap: 10px;
      align-items: center;
      justify-content: center;
    }
    &__radios{
      margin-top: 40px;
    }
  }
  .button{
    &__text{
      margin-top: 2px;
    }
  }
</style>
