<template>
  <header role="banner" id="header-navigation" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo"><p class="fr-logo">
                République
                <br>Française
              </p></div>
              <div class="fr-header__navbar">
                <button data-fr-opened="false" aria-controls="modal-header__menu" aria-haspopup="menu" id="button-861"
                        title="Menu" class="fr-btn--menu fr-btn" data-fr-js-modal-button="true">
                  Menu
                </button>
              </div>
            </div>
            <div class="fr-header__service"><a href="/" title="Accueil - Système de Design de l'État"
                                               class="router-link-active"><p class="fr-header__service-title">Système de
              Design de l'État</p></a></div>
          </div>
          <div class="fr-header__tools">
            <div class="fr-header__tools-links">
              <ul class="fr-btns-group" data-fr-js-header-links="true">
                <li><a target="_blank" href="#"
                       title="Être tenu informé - nouvelle fenêtre" class="fr-btn fr-icon-chat-3-line">
                  Être tenu informé
                </a></li>
                <li><a target="_blank" href="#"
                       title="Nous contacter - nouvelle fenêtre" class="fr-btn fr-icon-phone-line">
                  Nous contacter
                </a></li>
                <li><a href="#" class="fr-btn fr-icon-file-text-line">
                  Notes de version
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="modal-header__menu" class="fr-header__menu fr-modal" data-fr-js-modal="true"
         data-fr-js-header-modal="true">
      <div class="fr-container">
        <button aria-controls="modal-header__menu" class="fr-btn fr-btn--close" data-fr-js-modal-button="true">
          Fermer
        </button>
        <div class="fr-header__menu-links">
          <ul class="fr-btns-group">
            <li>
              <a target="_blank" href="#"
                 title="Être tenu informé - nouvelle fenêtre"
                 class="fr-btn fr-icon-notification-3-line">
                Être tenu informé
              </a>
            </li>
            <li><a target="_blank" href="#"
                   title="Nous contacter - nouvelle fenêtre"
                   class="fr-btn fr-icon-phone-line">
              Nous contacter
            </a>
            </li>
            <li>
              <a href="#" aria-controls="modal-header__menu"
                 class="fr-btn fr-icon-file-text-line"
                 data-fr-js-modal-button="true">
                Notes de version
              </a>
            </li>
          </ul>
        </div>
        <nav id="navigation-866" role="navigation" aria-label="Menu principal" class="fr-nav"
             data-fr-js-navigation="true">
          <ul class="fr-nav__list">
            <li class="fr-nav__item" data-fr-js-navigation-item="true">
              <a aria-current="true"
                 href="#"
                 target="_self"
                 aria-controls="modal-header__menu"
                 class="fr-nav__link"
                 data-fr-js-modal-button="true">Tab 1</a>
            </li>
            <li class="fr-nav__item" data-fr-js-navigation-item="true">
              <a href="#" target="_self"
                 aria-controls="modal-header__menu"
                 class="fr-nav__link"
                 data-fr-js-modal-button="true">Tab 2</a>
            </li>
            <li class="fr-nav__item" data-fr-js-navigation-item="true">
              <a href="#" target="_self"
                 aria-controls="modal-header__menu"
                 class="fr-nav__link"
                 data-fr-js-modal-button="true">Tab 3</a>
            </li>
            <li class="fr-nav__item" data-fr-js-navigation-item="true">
              <a href="#" target="_self"
                 aria-controls="modal-header__menu"
                 class="fr-nav__link"
                 data-fr-js-modal-button="true">Tab 4</a>
            </li>
            <li class="fr-nav__item" data-fr-js-navigation-item="true">
              <a href="#" target="_self"
                 aria-controls="modal-header__menu"
                 class="fr-nav__link"
                 data-fr-js-modal-button="true">Tab 5</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>