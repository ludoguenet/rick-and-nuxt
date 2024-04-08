<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => titleChunk ? `My app - ${titleChunk}` : 'My app',
})
</script>
