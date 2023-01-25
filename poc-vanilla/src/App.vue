<script setup lang="ts">
import {allMovies, Movie} from './api'
import {ref} from "vue";

const movies = ref<Movie[]>([
  {
    title: "placeholder",
    actors: ["placeholder 1", "placeholder 2"],
    duration: "PT1H30M",
    released: new Date("2023-01-01")
  }
])
const loadFromBackend = async () => movies.value = await allMovies()

</script>

<template>
  <h1>Vanilla CSS</h1>
  <p>Débrouille-toi.</p>
  <img src="./assets/debrouille-toi.png">
  <button @click="loadFromBackend">Load from backend</button>
  <table>
    <thead>
    <tr>
      <th> Title</th>
      <th> Year</th>
      <th> Duration</th>
      <th> Actors</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(movie, index) in movies" :key="index">
      <td>{{ movie.title }}</td>
      <td>{{ movie.released }}</td>
      <td>{{ movie.duration }}</td>
      <td>
        <ul>
          <li v-for="(actor,actor_index) in movie.actors" :key="actor_index">
            {{ actor }}
          </li>
        </ul>
      </td>
      <td>some actions</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
