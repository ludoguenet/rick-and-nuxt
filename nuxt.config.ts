// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }
})

export interface Character {
  name: string
  image: string
  status: string
}

export interface RickAndMortyResponse<T> {
  results: T[]
}