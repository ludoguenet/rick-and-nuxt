<script lang="ts" setup>
import type { Character } from '~/nuxt.config.js';

const query = ref<string>('')
const characters = ref<Array<Character>>([])
const errorMessage = ref<string|null>(null);

async function search() {
  errorMessage.value = null;
  
  try {
    const { results } = await $fetch(`https://rickandmortyapi.com/api/character/?name=${query.value}`) as { results: Array<Character> }

    characters.value = results;
  } catch {
    errorMessage.value = 'Nope';
  }
}
</script>

<template>
  <div>
    Page: characters

    <span v-if="errorMessage">{{  errorMessage }}</span>

    <form @submit.prevent="search">
      <input type="text" v-model="query">
      <button type="submit">Submit</button>
    </form>

    <ul v-if="characters">
      <li v-for="character in characters" :key="character.name">
        <NuxtLink :to="{name: 'characters-name', params: {name: character.name}}">Fiche de {{ character.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
