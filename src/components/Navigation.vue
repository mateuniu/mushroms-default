<template>
  <div>
<!--NAV CONTAINER-->
    <nav class="nav">
<!--MENU SECTION-->
<!--BUTTON MENU CONTAINER-->
      <transition name="menu-button-transition">
      <section v-show="loadMenuBtn" class="nav__button-menu-container">
        <button v-on:click="showMenu =!showMenu" 
        class="nav__button-menu--open">
          <hr class="menu-button--open__hr">
          <hr class="menu-button--open__hr">
          <hr class="menu-button--open__hr">
        </button>
      </section>
    </transition>
<!--ANIMATION FOR MENU-->
      <transition name="slide-menu">
      <section v-show="showMenu" class="menu">
        <form class="menu__form">
<!--CATEGORIES SEARCHING-->
<!--TIME-->
          <header>
            <h4 class="menu__form__title">czas</h4>
          </header>
          <section class="menu__form__section">
<!--styczeń-->
            <input type="radio" value="styczeń" id="styczeń" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="styczeń" class="menu__form__label">styczeń</label>
<!--luty-->
            <input type="radio" value="luty" id="luty" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="luty" class="menu__form__label">luty</label>
<!--marzec-->
            <input type="radio" value="marzec" id="marzec" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="marzec" class="menu__form__label">marzec</label>
<!--kwiecień-->
            <input type="radio" value="kwiecień" id="kwiecień" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="kwiecień" class="menu__form__label">kwiecień</label>
<!--maj-->
            <input type="radio" value="maj" id="maj" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="maj" class="menu__form__label">maj</label>
<!--czerwiec-->
            <input type="radio" value="czerwiec" id="czerwiec" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="czerwiec" class="menu__form__label">czerwiec</label>
<!--lipiec-->
            <input type="radio" value="lipiec" id="lipiec" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="lipiec" class="menu__form__label">lipiec</label>
<!--sierpień-->
            <input type="radio" value="sierpień" id="sierpień" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="sierpień" class="menu__form__label">sierpień</label>
<!--wrzesień-->
            <input type="radio" value="wrzesień" id="wrzesień" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="wrzesień" class="menu__form__label">wrzesień</label>
<!--październik-->
            <input type="radio" value="październik" id="październik" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="październik" class="menu__form__label">październik</label>
<!--listopad-->
            <input type="radio" value="listopad" id="listopad" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="listopad" class="menu__form__label">listopad</label>
<!--grudzień-->
            <input type="radio" value="grudzień" id="grudzień" class="menu__form__input"
            v-model="outputMenu.times"/>
            <label for="grudzień" class="menu__form__label">grudzień</label>
          </section>
<!--PLACE-->
          <header>
            <h4 class="menu__form__title">miejsce</h4>
          </header>
          <section class="menu__form__section">
<!--las iglasty-->
            <input type="radio" value="las iglasty" id="iglasty" class="menu__form__input"
            v-model="outputMenu.places"/>
            <label for="iglasty" class="menu__form__label">las iglasty</label>
<!--las liściasty-->
            <input type="radio" value="las liściasty" id="liściasty" class="menu__form__input"
            v-model="outputMenu.places"/>
            <label for="liściasty" class="menu__form__label">las liściasty</label>
<!--las mieszany-->
            <input type="radio" value="las mieszany" id="mieszany" class="menu__form__input"
            v-model="outputMenu.places"/>
            <label for="mieszany" class="menu__form__label">las mieszany</label>
<!-- tereny podmokłe-->
            <input type="radio" value="tereny podmokłe" id="podmokłe" class="menu__form__input"
            v-model="outputMenu.places"/>
            <label for="podmokłe" class="menu__form__label">tereny podmokłe</label>
<!--ogrody i łąki-->
            <input type="radio" value="ogrody i łąki" id="ogrody" class="menu__form__input"
            v-model="outputMenu.places"/>
            <label for="ogrody" class="menu__form__label">ogrody i łąki</label>
<!--drewno-->
            <input type="radio" value="drewno" id="drewno" class="menu__form__input"
            v-model="outputMenu.places"/>
            <label for="drewno" class="menu__form__label">drewno</label>
          </section>
<!--GASTRO-->
          <header>
            <h4 class="menu__form__title">gastro</h4>
          </header>
          <section class="menu__form__section">
<!--smaczny-->
            <input type="radio" value="smaczny" id="smaczny" class="menu__form__input"
            v-model="outputMenu.munchies"/>
            <label for="smaczny" class="menu__form__label">smaczny</label>
<!--jadalny-->
            <input type="radio" value="jadalny" id="jadalny" class="menu__form__input"
            v-model="outputMenu.munchies"/>
            <label for="jadalny" class="menu__form__label">jadalny</label>
<!--niezdatny-->
            <input type="radio" value="niezdatny" id="niezdatny" class="menu__form__input"
            v-model="outputMenu.munchies"/>
            <label for="niezdatny" class="menu__form__label">niezdatny</label>
<!--trujący-->
            <input type="radio" value="trujący" id="trujący" class="menu__form__input"
            v-model="outputMenu.munchies"/>
            <label for="trujący" class="menu__form__label">trujący</label>
          </section>
<!-- CLEAR BUTTON-->
          <button v-on:click="clear" class="menu__form__clear-button">
            <span class="menu__form__clear-button__span">wyczyść</span>
          </button>
        </form>
      </section>
      </transition>
<!--BLUR-->
      <transition name="bluring">
        <section v-on:click="showMenu = !showMenu" v-show="showMenu" class="blur"></section>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
name: 'Navigation',
  props: ['outputMenu'],
  data() {
    return {
      showMenu: false,
      loadMenuBtn: false
    }
  },
  methods: {
    clear() {
      this.outputMenu = ''
    }
  },
// function with will switch loadMenuBtn from false to true 
// when Navigation.vue component will be mounted  
  mounted() {
    return this.loadMenuBtn = true;
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';
</style>
