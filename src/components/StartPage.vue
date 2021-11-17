<template>
  <section class='start'>
    <div class='start__bg-wrapper'>
      <img class='start__bg' src='../assets/img/main-bg.jpg' alt='bg'>
<!--      <div class='start__mouse'>-->
<!--        <span class='start__mouse-wheel'></span>-->
<!--      </div>-->
    </div>
    <div class='start__language'>
      <span class='start__language-ua'>UA</span>
      <span class='start__language-eng'>ENG</span>
    </div>
    <div class='container'>
      <div class='start__text'>
        <h1 class='start__title'>{{ getStartPage.title }}</h1>
        <h2 class='start__subtitle'>{{ getStartPage.subtitle }}</h2>
      </div>
    </div>
  </section>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'startPageComponent',
  computed: mapGetters(['getStartPage'])
}
</script>
<style lang='scss'>
//.logo {
//  background: rgba(0, 0, 0, 0.5);
//  width: 200px;
//  height: 200px;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  justify-self: flex-end;
//  border-radius: 50%;
//  box-shadow: 0 0 30px 5px rgba(0, 0, 0, .5);
//  float: right;
//  margin-top: 10px;
//  &:before {
//    position: absolute;
//    font-size: 140px;
//    animation: rotateLogo 20s linear infinite;
//    font-weight: bold;
//  }
//  @media (max-width: 767px) {
//    position: absolute;
//    left: 50%;
//    transform: translateX(-50%);
//  }
//}
.start {
  color: #000;
  font-weight: 300;
  padding-bottom: 50px;
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
  &__bg-wrapper {
    width: 100%;
    height: 70vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      transform: scale(-1, 1)
    }
  }
  //&__mouse {
  //  border: 3px solid #fff;
  //  border-radius: 16px;
  //  height: 47px;
  //  width: 30px;
  //  position: absolute;
  //  bottom: 10px;
  //  left: 50%;
  //  transform: translateX(-50%);
  //  &-wheel {
  //    position: absolute;
  //    width: 3px;
  //    height: 6px;
  //    background: #fff;
  //    border-radius: 3px;
  //    left: 50%;
  //    transform: translateX(-50%);
  //    animation: wheel 1s linear infinite;
  //  }
  //}
  &__language {
    color: #fff;
    position: absolute;
    top: 50px;
    right: 50px;
    @media (max-width: 767px) {
      top: 25px;
      right: 25px;
    }
    & span {
      cursor: pointer;
    }
    &:before {
      content: '';
      position: absolute;
      top: -1px;
      left: 34px;
      width: 2px;
      height: 20px;
      background: #fff;
      transform: rotate(20deg);
    }
    &-ua {
      margin-right: 20px;
    }
    @media (min-width: 992px) {
      & span:hover {
        color: $mainColor;
        transition: .3s;
      }
    }
  }
  &__text {
    line-height: 200%;
    margin-top: 50px;
    @media (max-width: 767px) {
      text-align: center;
    }
    @media (max-width: 479px) {
      margin-top: 30px;
    }
  }
  &__title {
    font-size: 60px;
    padding: 0 0 25px 0;
    @media (max-width: 479px) {
      font-size: 50px;
    }
  }
  &__subtitle {
    font-size: 40px;
    line-height: 120%;
    @media (max-width: 479px) {
      font-size: 30px;
    }
  }
}

@keyframes wheel {
  0% {
    opacity: 0;
    top: 5px;
  }
  30% {
    opacity: 1;
    top: 8px;
  }
  100% {
    opacity: 0;
    top: 20px;
  }
}
</style>