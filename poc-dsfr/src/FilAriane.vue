<template>
  <nav role="navigation" aria-label="vous êtes ici :" class="fr-breadcrumb" data-fr-js-breadcrumb="true">
    <button aria-expanded="false" aria-controls="breadcrumb-192" class="fr-breadcrumb__button"
            data-fr-js-collapse-button="true">
      Voir le fil d’Ariane
    </button>
    <div id="breadcrumb-192" class="fr-collapse" data-fr-js-collapse="true">
      <ol class="fr-breadcrumb__list">
        <li><a href="/" class="fr-breadcrumb__link router-link-active">Déroulé</a></li>
        <li><a href="/comment-utiliser-le-dsfr" class="fr-breadcrumb__link">du fil</a></li>
        <li><a href="/comment-utiliser-le-dsfr/developpeurs" class="fr-breadcrumb__link">d'ariane</a></li>
        <li><a aria-current="page" class="fr-breadcrumb__link router-link-exact-active">Page courante</a></li>
      </ol>
    </div>
  </nav>
</template>