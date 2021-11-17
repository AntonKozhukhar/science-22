<template>

  <div class='wrapper'>
    <StartPage/>

    <Content/>

    <Footer/>
  </div>

</template>

<script>

import StartPage from './components/StartPage'
import Footer from './components/Footer'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {Content, Footer, StartPage},
}

</script>

<style lang='scss'>

</style>
