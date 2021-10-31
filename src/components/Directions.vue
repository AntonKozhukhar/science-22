<template>
  <section class='directions'>

    <div class='container'>

      <h3 class='directions__title'>{{ title }}</h3>
        <div class='directions__col-wrapper'>
          <div class='directions__col' v-scroll-to="{el: '#human22'}">
            <div class='directions__col-item _icon-human'>{{ human }}</div>
          </div>
          <div class='directions__col' v-scroll-to="{el: '#technic22'}">
            <div class='directions__col-item _icon-robot'>{{ technique }}</div>
          </div>
          <div class='directions__col' v-scroll-to="{el: '#education22'}">
            <div class='directions__col-item _icon-hat'>{{ education }}</div>
          </div>
        </div>
    </div>

  </section>
</template>
<script>
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
}
</script>
<style lang='scss'>

.directions {
  border-top: 15px dotted #00dae3;

  font-size: 25px;
  font-weight: 300;
  padding: 50px 0;

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
    background: #fff;
    @media (min-width: 992px) {
      &:hover {
        background: rgba(0, 218, 227, .1);
        &:before {
          animation: rotate 1.5s forwards;
        }
      }
    }
    &:before {
      font-size: 100px;
      order: 2;
      margin-top: 40px;
    }
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 60%);
    border-radius: 20px;
  }
  70% {
    box-shadow: 0 0 0 12px rgba(0, 0, 0, 0%);
    border-radius: 20px;
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0%);
    border-radius: 20px;
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