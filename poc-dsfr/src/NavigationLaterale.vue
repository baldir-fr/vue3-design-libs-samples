<template>
  <nav role="navigation" aria-label="Menu latéral"
       class="fr-sidemenu fr-sidemenu--sticky-full-height fr-mb-0-5v">
    <div class="fr-sidemenu__inner fr-pt-12v">
      <button aria-controls="sidemenu-286" aria-expanded="false" class="fr-sidemenu__btn"
              data-fr-js-collapse-button="true">
        Dans cette rubrique
      </button>
      <div id="sidemenu-286" class="fr-collapse" data-fr-js-collapse="true">
        <ul class="fr-sidemenu__list" data-fr-js-sidemenu-list="true">
          <li class="fr-sidemenu__item"><a href="/comment-utiliser-le-dsfr/perimetre-d-application-du-dsfr"
                                           target="_self" class="fr-sidemenu__link"> Nav 1</a>
            <div id="comment-utiliser-le-dsfr-perimetre-d-application-du-dsfr" class="fr-collapse fr-colapse"
                 data-fr-js-collapse="true">
              <ul class="fr-sidemenu__list" data-fr-js-sidemenu-list="true"></ul>
            </div>
          </li>
          <li class="fr-sidemenu__item">
            <button aria-expanded="true" aria-controls="comment-utiliser-le-dsfr-developpeurs"
                    class="fr-sidemenu__btn" data-fr-js-collapse-button="true">
              Nav 2
            </button>
            <div id="comment-utiliser-le-dsfr-developpeurs"
                 class="fr-collapse fr-colapse fr-collapse--expanded fr-collapsing" data-fr-js-collapse="true"
                 style="--collapse-max-height:none; --collapse:-192px;">
              <ul class="fr-sidemenu__list" data-fr-js-sidemenu-list="true">
                <li class="fr-sidemenu__item fr-sidemenu__item--active"><a
                    href="/comment-utiliser-le-dsfr/developpeurs/prise-en-main-du-dsfr" aria-current="page"
                    target="_self" class="fr-sidemenu__link router-link-exact-active router-link-active">Item 1</a></li>
                <li class="fr-sidemenu__item"><a
                    href="/comment-utiliser-le-dsfr/developpeurs/les-portages-dsfr-en-cours" target="_self"
                    class="fr-sidemenu__link">Item 2</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>