<template>
  <div>
    <app-navigation :outputMenu="outputMenu" class="navigation-component"></app-navigation>
    <app-title class="title-component"></app-title>
    <app-main :outputMenu="outputMenu" class="main-component"></app-main>
  </div>
</template>
<script>
import Navigation from './components/Navigation.vue'
import Title from './components/Title.vue'
import Main from './components/Main.vue'
export default {
  components: {
    'app-navigation': Navigation,
    'app-title': Title,
    'app-main': Main
  },
  data() {
    return {
        outputMenu: {
        times: '',
        places: '',
        munchies: ''
        }
      }
    }
  }
    
</script>
<style lang="scss" scoped>
  @import 'styles/main.scss';
</style>
