<script setup lang="ts">
import {allMovies, Movie} from './api'
import {ref} from "vue";

const movies = ref<Movie[]>()
const loadMovies = async () => movies.value = await allMovies()
</script>

<template>
  <main>
    <h1>Element PLus</h1>
    <el-button @click="loadMovies">Load movies</el-button>
    <p>{{ movies }}</p>
  </main>
</template>

<style scoped>
</style>
