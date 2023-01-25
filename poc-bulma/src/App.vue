<script setup lang="ts">

import {allMovies, Movie} from './api'
import {ref} from "vue";

const movies = ref<Movie[]>()
const loadMovies = async () => movies.value = await allMovies()
</script>

<template>
  <button @click="loadMovies">Load movies</button>
  <p>{{movies}}</p>
  <main class="container">
    <h1 class="title">Bulma</h1>
    <h2 class="subtitle">Subtitle</h2>
    <p class="block">Lorem Elsass ipsum consectetur Strasbourg Huguette rhoncus morbi leo Hans mamsell aliquam id
      Pfourtz ! tellus
      turpis, risus, gravida tellus vielmols, adipiscing Gal ! libero. geïz Mauris quam, Wurschtsalad condimentum schneck
      lotto-owe hopla barapli amet Richard Schirmeck habitant sed id, bissame wie lacus hopla und auctor, commodo DNA, non
      jetz gehts los hoplageiss schpeck gal purus quam. Morbi chambon mollis nüdle sit gewurztraminer tristique eget
      Kabinetpapier sit rossbolla merci vielmols bredele picon bière nullam sagittis non réchime sit senectus Salu bissame
      ac Chulien kuglopf schnaps ftomi! ullamcorper Chulia Roberstau Heineken et tchao bissame Christkindelsmärik Racing.
      libero, wurscht ac Yo dû. knack dolor hopla ornare Carola yeuh. semper amet vulputate libero, in, météor varius
      Oberschaeffolsheim kartoffelsalad turpis suspendisse elementum hopla knepfle porta s'guelt ch'ai munster
      Pellentesque amet, Coopé de Truchtersheim dui hop eleifend ante dignissim pellentesque rucksack kougelhopf leo
      Miss Dahlias blottkopf, elit so flammekueche mänele Verdammi placerat Gal. messti de Bischheim sed leverwurscht
      Oberschaeffolsheim Salut bisamme baeckeoffe Spätzle salu geht's</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales sapien vitae finibus ullamcorper. Integer orci
      mauris, luctus id ex in, dictum molestie erat. Vivamus convallis venenatis finibus. Phasellus volutpat odio massa,
      eu
      viverra urna vehicula vitae. Aenean consequat, nibh sed iaculis pharetra, dolor est scelerisque sapien, id accumsan
      lacus neque in turpis. Nam pretium quam a pellentesque dictum. Nulla id orci ut dolor suscipit vulputate sit amet
      vel
      nisl. Suspendisse ante arcu, molestie in dapibus ac, tempus ut sem. Vestibulum quis cursus risus. Donec a molestie
      orci, ac laoreet sem. In elit magna, efficitur non dolor vel, tempor efficitur lectus.
    </p>
  </main>


</template>

<style scoped>
</style>
