<script setup lang="ts">
import {allMovies, Movie} from './api'
import {ref} from "vue";

const movies = ref<Movie[]>()
const loadMovies = async () => movies.value = await allMovies()
</script>

<template>
  <button @click="loadMovies">Load movies</button>
  <p>{{ movies }}</p>
  <router-view/>
</template>

