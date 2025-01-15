<script setup lang="ts">

import axios from "axios";
import {ref, watch, watchEffect} from "vue";

import RadioGroup from "./components/ui/RadioGroup.vue"
import Button from "./components/ui/Button.vue";
import Canvas from "./components/ui/Canvas.vue";
import Tabs from "./components/shared/Tabs.vue";
import Container from "./components/shared/Container.vue";

import {Download, Shuffle} from "lucide-vue-next";

const API_URL = "https://60db5d8d801dcb00172910e7.mockapi.io";

const tabs = ref([]);
const elements = ref([]);
const url = ref('');

watchEffect(async () => {
  try{
    url.value = window.location.pathname.slice(1);

    const tabsResponse = await axios.get(`${API_URL}/tabs`);
    tabs.value = tabsResponse.data;

    const elementsResponse = await axios.get(`${API_URL}/elements?type=${url.value || tabs.value[0].type}`);
    elements.value = elementsResponse.data;
  }
  catch(error){
    console.error(`Ошибка с сетью: ${error}`);
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
              :url = "url"
          />
          <RadioGroup
              class="generator__radios"
              :items="elements"
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
