<template>
    <nav>
        <span>My app</span>
        <NuxtLink :to="{ name: 'characters'}">Rechercher un personnage</NuxtLink>
        <NuxtLink :to="{ name: 'register'}">S'enregistrer</NuxtLink>
    </nav>
    <slot></slot>
</template>