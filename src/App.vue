<script setup lang="ts">

import {ref, watch, onMounted} from "vue";
import {useRouter} from 'vue-router';
import {Download, Shuffle} from "lucide-vue-next";

import {Button, RadioGroup, Canvas} from "@components/ui"
import {Tabs, Container} from "@components/shared";

import {getTabs} from '@/services/tabs';
import {getElementsByType} from '@/services/elements';


const router = useRouter();

const tabs = ref([]);
const elements = ref([]);

const activeTab = ref({});
const activeElement = ref({});

const handleTab = (item: object) => {
  activeTab.value = item;
  router.replace({name: 'home', query: {type: activeTab.value.type}});
}

onMounted(async () => {
  try {
    tabs.value = await getTabs();
    activeTab.value = tabs.value[0];

    elements.value = await getElementsByType(activeTab.value.type);
    activeElement.value = elements.value[0];

  } catch (error) {
    console.error(`Ошибка сети: ${error}`);
  }
})

watch(activeTab, async () => {
  try {
    elements.value = await getElementsByType(activeTab.value.type);
  } catch (error) {
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
            <Canvas width="513" height="546"/>
          </div>
          <div class="generator__buttons">
            <Button class="generator__button">
              <Shuffle width="20" height="20"/>
              <span class="button__text">Random</span>
            </Button>
            <Button class="generator__button" variant="secondary">
              <Download width="20" height="20"/>
              <span class="button__text">Download</span>
            </Button>
          </div>
        </div>
        <div class="generator__right">
          <h2 class="generator__subtitle">Customize Look</h2>
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
.generator {
  height: 100vh;
  display: flex;
  align-items: center;

  &__title,
  &__subtitle {
    user-select: none;
  }

  &__content {
    margin-top: 56px;
    display: grid;
    grid-template-columns: 512px 1fr;
    column-gap: 80px;
  }

  &__tabs {
    margin-top: 24px;
  }

  &__buttons {
    margin-top: 32px;
    display: flex;
    column-gap: 20px;
  }

  &__button {
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: center;
  }

  &__radios {
    margin-top: 40px;
  }
}

.button {
  &__text {
    margin-top: 2px;
  }
}
</style>
