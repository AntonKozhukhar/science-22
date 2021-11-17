<template>
  <main class='content'>
    <directions/>
    <Section v-for='(section,key) of getSections'
                       :key='key'
                       :keyProp='key'
                       :section='section'/>
    <contact-us/>
  </main>
</template>
<script>
import Directions from './Directions'
import Section from './Section'
import ContactUs from './ContactUs'
import {mapGetters} from 'vuex'

export default {
  name: 'content',
  components: {ContactUs, Directions, Section},
  computed: mapGetters(['getSections'])
}
</script>
