<script setup lang="ts">
import {Meta, Todo} from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import {ref} from 'vue';
import {allMovies, Movie} from '../api'

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);
const meta = ref<Meta>({
  totalCount: 1200
});

const movies = ref<Movie[]>()
const loadMovies = async () => movies.value = await allMovies()
</script>
<template>
  <q-page class="row items-center justify-evenly">
    <q-btn @click="loadMovies">Load movies</q-btn>
    <p>{{ movies }}</p>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

