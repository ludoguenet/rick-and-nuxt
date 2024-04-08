<script lang="ts" setup>
import type { Character, RickAndMortyResponse } from '~/nuxt.config.js';

const route = useRoute()
const { data } = await useFetch(`https://rickandmortyapi.com/api/character?name=${route.params.name}`,{
    transform: (data: RickAndMortyResponse<Character>) => {
      return {
        name: data.results[0].name,
        status: data.results[0].status,
        image: data.results[0].image,
      }
    },
  });

  if (data.value === null) {
    showError({
      statusCode: 404,
      statusMessage: 'No characters found.'
    });
  }

  useHead({
    title: 'Profil de ' + data.value?.name,
    meta: [
      {name: 'description', content: `Le profil complet de ${data.value?.name}`},
      {property: 'og:image', content: data.value?.image},
    ]
  })
</script>

<template>
  <div>
    <h1>{{ data?.name }}</h1>
    <div>{{ data?.status }}</div>
    <img :src="data?.image" :alt="data?.name">
  </div>
</template>
