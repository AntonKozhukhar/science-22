<template>

  <div class='wrapper'>
    <startPage :title='title'
               :subtitle1='subtitle1'
               :subtitle2='subtitle2'
    />

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
      subtitle1: 'МИ ВІРИМО В НАУКУ',
      subtitle2: 'БУДУЄМО МАЙБУТНЄ',
    }
  },
}

</script>

<style lang='scss'>

</style>
