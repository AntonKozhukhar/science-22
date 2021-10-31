<template>

  <div class='wrapper'>
    <startPage :title='title' :subtitle='subtitle'/>

    <contentComponent/>

    <footerComponent/>
  </div>

</template>

<script>

import StartPage from './components/StartPageComponent'
import FooterComponent from './components/FooterComponent'
import ContentComponent from './components/ContentComponent'

export default {

  name: 'App',
  components: {ContentComponent, FooterComponent, StartPage},
  data() {
    return {
      title: 'НАУКА 22',
      subtitle: 'МИ ВІРИМО В НАУКУ. БУДУЄМО МАЙБУТНЄ.',
    }
  },
}

</script>

<style lang='scss'>

</style>
