<script setup lang="ts">
import {allMovies, Movie} from './api'
import {ref} from "vue";
import MyHeader from "@/MyHeader.vue";
import NavigationLaterale from "@/NavigationLaterale.vue";
import FilAriane from "@/FilAriane.vue";
import MyFooter from "@/MyFooter.vue";

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
  <MyHeader/>
  <main role="main" id="content">
    <div class="fr-container">
      <div class="fr-grid-row">
        <div class="fr-col-12 fr-col-md-4">
          <NavigationLaterale/>
        </div>
        <div id="contenu" class="fr-col-12 fr-col-md-8 fr-py-12v">
          <FilAriane/>
          <h1>DSFR</h1>
          <div>
            <div class="fr-editor">

              <div class="fr-grid-row">
                <div class="fr-col">
                  <button class="fr-btn" @click="loadFromBackend">
                    Charger les films
                  </button>
                  <div class="fr-table fr-table--layout-fixed">
                    <table >
                      <thead>
                      <tr>
                        <th scope="col"> Titre</th>
                        <th scope="col"> Année de sortie</th>
                        <th scope="col"> Durée</th>
                        <th scope="col"> Acteurs</th>
                        <th scope="col"> Actions</th>
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

                  </div>
                </div>
              </div>
              <div class="fr-grid-row fr-mb-3w">
                <div class="fr-col">
                  <div class="fr-alert fr-alert--info">
                    <h3 class="fr-alert__title">La version 1.8.5 est disponible !</h3>
                    <p>Retrouvez la liste des nouveautés dans la <a href="/version-courante">note de version</a>, vous
                      pouvez la télécharger ci-dessous !</p>
                  </div>
                </div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <h2>Installation</h2>
                </div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <p>L'installation du Système de Design de l'État (ci-après, le&nbsp;DSFR) peut se faire de manières
                    différentes. En téléchargeant l'ensemble des fichiers nécessaires à son utilisation, en utilisant le
                    gestionnaire de paquets&nbsp;NPM, ou encore via git.
                  </p></div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <h3>Fichiers statiques</h3>
                </div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <p>Il est possible de télécharger l'ensemble du DSFR au format zip ci-dessous. Le zip contient un
                    ensemble de fichiers CSS et Javascript, ainsi que les différentes polices utilisées, à savoir la
                    Marianne et la Spectral. <br>
                  </p></div>
              </div>
              <div class="fr-grid-row fr-grid-row--gutters fr-mb-2w">
                <div class="fr-col-12 fr-col-md-7">
                  <div class="fr-download fr-enlarge-link fr-download--card">
                    <p>
                      <a href="/uploads/dsfr_v1_7_2_b84b59279c.zip" download="" class="fr-download__link">Téléchargez la
                        dernière version du DSFR
                        <span class="fr-download__detail">
                ZIP – 13 Mo
            </span>
                      </a>
                    </p>
                    <p class="fr-download__desc">Version 1.7.2</p>
                  </div>
                </div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <h3>NPM</h3>
                </div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <p>Le DSFR est disponible sur&nbsp;NPM&nbsp;via un ensemble de packages qu'il est possible d'ajouter
                    directement à votre projet. Il est de ce fait nécessaire d'installer&nbsp;<a
                        href="https://nodejs.org/en/">NodeJS</a>, et d'avoir un fichier&nbsp;<code>package.json</code>&nbsp;à
                    la racine de votre projet. (Il est possible d'en créer un directement via la commande&nbsp;<code>npm
                      init</code>).
                  </p></div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <p>Une fois en place, il suffit d'installer le package @gouvfr/dsfr contenant l’ensemble des
                    composants:
                  </p></div>
              </div>
              <div class="snippet-wrapper fr-mb-3w">
                <div class="code-toolbar">
                  <pre class=" language-html"><code v-highlight=""
                                                    class=" language-html">npm install @gouvfr/dsfr</code></pre>
                  <div class="toolbar">
                    <div class="toolbar-item">
                      <button class="fr-btn fr-btn--sm">Copier</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <p>Il est également possible d'installer le package avec&nbsp;<a href="https://yarnpkg.com/"
                                                                                   target="_blank"
                                                                                   title="Yarn - nouvelle fenêtre">Yarn</a>&nbsp;:
                  </p></div>
              </div>
              <div class="snippet-wrapper fr-mb-3w">
                <div class="code-toolbar">
                  <pre class=" language-html"><code v-highlight=""
                                                    class=" language-html">yarn add @gouvfr/dsfr</code></pre>
                  <div class="toolbar">
                    <div class="toolbar-item">
                      <button class="fr-btn fr-btn--sm">Copier</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <p>Une fois terminé le dsfr sera alors installé dans le dossier node_modules/@gouvfr/dsfr/
                  </p></div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <p>Pour visualiser les exemples, il est nécessaire de lancer un serveur local :
                  </p></div>
              </div>
              <div class="snippet-wrapper fr-mb-3w">
                <div class="code-toolbar">
                  <pre class=" language-html"><code v-highlight="" class=" language-html">npm run serve</code></pre>
                  <div class="toolbar">
                    <div class="toolbar-item">
                      <button class="fr-btn fr-btn--sm">Copier</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fr-grid-row">
                <div class="fr-col">
                  <p>Si vous souhaitez proposer des corrections ou évolutions au code du DSFR, vous trouverez les
                    informations nécessaires sur <a href="/comment-utiliser-le-dsfr/developpeurs/contribuer-au-dsfr"
                                                    target="_self">la documentation de contribution à la page
                      suivante</a>.<br>
                  </p></div>
              </div>
            </div>
          </div> <!----> <!---->
          <div class="page-switcher fr-pt-6w fr-mt-14v"><p class="fr-mb-0"><a
              href="/comment-utiliser-le-dsfr/developpeurs"
              class="fr-link fr-icon-arrow-left-line fr-link--icon-left router-link-active">Développeurs</a></p>
            <p class="fr-mb-0"><a href="/comment-utiliser-le-dsfr/developpeurs/contribuer-au-dsfr"
                                  class="fr-link fr-icon-arrow-right-line fr-link--icon-right fr-mt-auto fr-mr-0">Contribuer
              au DSFR</a></p></div>
        </div>
      </div>
    </div> <!----></main>

  <MyFooter/>
</template>

