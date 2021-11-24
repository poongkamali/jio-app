<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layouts/Headerjio.vue'
import Footer from './components/layouts/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
