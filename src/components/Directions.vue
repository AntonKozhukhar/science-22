<template>
  <section class='directions'>
    <div class='container'>
      <h3 class='directions__title'>{{ getDirections.title }}</h3>
      <div class='directions__col-wrapper'>
        <div class='directions__col' v-scroll-to="{el: '#human22'}" data-aos='fade-right' data-aos-duration='700'>
          <div class='directions__col-item'>
            {{ getDirections.col1.title }}
            <div class='directions__icon'>
              <img :src=getDirections.col1.bgImage alt='icon'>
            </div>
          </div>
        </div>
        <div class='directions__col' v-scroll-to="{el: '#technic22'}" data-aos='fade-up' data-aos-duration='700'>
          <div class='directions__col-item'>{{ getDirections.col2.title }}
            <div class='directions__icon'>
              <img :src=getDirections.col2.bgImage alt='icon'>
            </div>
          </div>
        </div>
        <div class='directions__col' v-scroll-to="{el: '#education22'}" data-aos='fade-left' data-aos-duration='700'>
          <div class='directions__col-item'>{{ getDirections.col3.title }}
            <div class='directions__icon'>
              <img :src=getDirections.col3.bgImage alt='icon'>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'directions',
  data() {
    return {
      title: 'Пріоритетні напрямки діяльності НАУКА 22:',
      human: 'ЛЮДИНА 22',
      technique: 'ТЕХНІКА 22',
      education: 'ОСВІТА 22',
    }
  },

  computed: mapGetters(['getDirections']),
}
</script>
<style lang='scss'>

.directions {
  border-top: 15px dotted $mainColor;
  font-size: 25px;
  font-weight: 300;
  padding: 50px 0;
  @media (max-width: 767px) {
    padding: 30px 0;
  }
  &__title {
    font-size: 40px;
    margin-bottom: 60px;
    text-align: center;
  }
  &__col-wrapper {
    display: flex;
    margin: 0 -65px;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 992px) {
      margin: 0 -30px;
    }
  }
  &__col {
    position: relative;
    flex: 0 1 33.333%;
    padding: 0 65px;
    height: 220px;
    @media (max-width: 992px) {
      padding: 0 30px;
    }
    @media (max-width: 767px) {
      flex: 0 1 50%;
      &:not(:last-child) {
        margin-bottom: 60px;
      }
    }
    @media (max-width: 479px) {
      flex: 0 1 100%;
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
  &__col-item {
    height: 100%;
    border-radius: 30px;
    padding-top: 20px;
    box-shadow: 0 0 20px 5px rgb(0, 0, 0, .25);
    transition: .5s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    @media (min-width: 992px) {
      &:hover {
        animation: rotate 1.5s forwards;
      }
    }
  }
  &__icon {
    width: 140px;
    height: auto;
    padding: 20px 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  33.333% {
    transform: rotate(45deg);
  }
  66.666% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>