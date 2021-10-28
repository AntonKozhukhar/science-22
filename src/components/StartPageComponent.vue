<template>
  <section class='start'>
    <div class='container'>

      <span class='logo _icon-atom'></span>

      <div class='start__text'>
        <h1 class='start__title'>{{ title }}</h1>
        <h2 class='start__subtitle'>{{ subtitle1 }}</h2>
        <h2 class='start__subtitle' id='test'>{{ subtitle2 }}</h2>
      </div>
      <div class='mouse'>
        <span class='mouse__wheel'></span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'startPageComponent',
  props: {
    title: {},
    subtitle1: {},
    subtitle2: {},
  },
}
</script>
<style lang='scss'>
.logo {
  background: rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  border-radius: 50%;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, .5);
  float: right;
  margin-top: 10px;
  &:before {
    position: absolute;
    font-size: 140px;
    animation: rotateLogo 20s linear infinite;
    font-weight: bold;
  }
  @media (max-width: 767px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.start {
  background: url('../assets/img/main-bg.jpg') 50%/cover no-repeat;
  height: 100vh;
  width: 100vw;
  position: relative;
  top: 0;
  left: 0;
  color: #fff;
  font-weight: 300;
  &__text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    line-height: 200%;
    @media (max-width: 767px) {
      left: 50%;
      transform: translate(-50%, -30%);
      text-align: center;
      width: 100%;
    }
  }
  &__title {
    font-size: 60px;
    padding: 0 0 50px 0;
  }
  &__subtitle {
    font-size: 30px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
.mouse {
  border: 3px solid #fff;
  border-radius: 16px;
  height: 47px;
  width: 30px;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  &__wheel {
    position: absolute;
    width: 3px;
    height: 6px;
    background: #fff;
    border-radius: 3px;
    left: 50%;
    transform: translateX(-50%);
    animation: wheel 1s linear infinite;
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