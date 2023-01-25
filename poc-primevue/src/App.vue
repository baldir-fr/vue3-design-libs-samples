<script setup lang="ts">
import {ref} from "vue";
import {useToast} from "primevue/usetoast";
import {allMovies, Movie} from './api'

const text = ref<String>("")
const toast = useToast()
const showToast = () => toast.add({severity: "success", summary: "summary", detail: "detail", life: 3000})

const movies = ref<Movie[]>()
const loadMovies = async () => movies.value = await allMovies()
</script>

<template>
  <Button @click="loadMovies">Load movies</Button>
  <p>{{movies}}</p>
  <main class="container">
    <h1>PrimeVue </h1>
    <span class="p-float-label">
            <InputText id="username" type="text" v-model="value2"/>
            <label for="username">Username</label>
        </span>

    <Button @click="showToast">Show toast</Button>

    <Toast></Toast>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
