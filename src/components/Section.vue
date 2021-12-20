<template>
  <section class='section' :id=keyProp>
    <div class='container'>
      <div class='section__row'>
        <div class='section__col'
             v-for='(col,i) of section'
             :key='i'
             :class="{ 'section__col-main': col.id===1 }"
             data-aos='zoom-in' data-aos-duration='700'>
          <div class='section__item' :class="{ 'section__item-main': col.id===1 }">
            <div class='section__icon' v-if='col.id>1'>
              <img :src=col.bgImage alt='icon'>
            </div>
            <h3 class='section__title' :class="{ 'section__title-main': col.id===1 }">{{ col.title }}</h3>
            <p class='section__text-main' :id='`section-${col.id}-text-main`'>{{ col.mainText }}</p>
            <ul class='section__list'>
              <li class='section__text'
                  :id='`section-${col.id}-text-${j+1}`'
                  v-for='(li,j) of col.textList'
                  :key='j'
                  :class="{'section__text-main': col.id===1 }"
              >{{ li }}
              </li>
            </ul>
            <div class='section__img' v-if='col.id===1'>
              <img :src=col.img alt='img'>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section',
  props: {
    section: {},
    keyProp: {},
  },
}
</script>

<style scoped lang='scss'>

.section {
  padding-top: 50px;
  @media (max-width: 767px) {
    padding: 30px 0;
  }
  &:nth-child(2) {
    .section__item:not(.section__item-main) {
      height: 235px;
    }
  }
  &:nth-child(3) {
    .section__item:not(.section__item-main) {
      height: 170px;
    }
  }
  &:nth-child(4) {
    .section__item:not(.section__item-main) {
      height: 175px;
    }
  }
  &__row {
    display: flex;
    margin: 0 -20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__img {
    width: 100%;
    margin-top: 30px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0 0 20px 20px;
    }
  }
  &__col {
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 1;
    padding: 0 20px;
    flex: 0 1 25%;
    position: relative;
    @media (max-width: 1200px) {
      flex: 0 1 40%;
      align-items: normal;
    }
    @media (max-width: 767px) {
      flex: 0 1 50%;
    }
    @media (max-width: 479px) {
      flex: 0 1 100%;
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
    &-main {
      flex: 0 1 50%;
      @media (max-width: 1200px) {
        flex: 0 1 80%;
        margin-bottom: 40px;
      }
      @media (max-width: 767px) {
        flex: 0 1 100%;
      }
    }
  }
  &__item {
    box-shadow: 0 0 20px 5px rgb(0, 0, 0, .25);
    padding: 20px 10px;
    border-radius: 20px;
    transition: .3s;
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 100%;
    position: relative;
    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 150px;
      color: rgba(0, 113, 137, .1);
    }
    @media (min-width: 992px) {
      &:hover {
        background: $mainColor;
        cursor: pointer;
      }
    }
    &-main {
      border-radius: 20px;
      padding: 20px 0 0 0;
    }
  }
  &__title {
    font-size: 25px;
    margin-bottom: 30px;
    &-main {
      font-size: 30px;
    }
  }
  &__list {
    flex: 1 1 auto;
  }
  &__text {
    text-align: left;
    margin-left: 30px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 4px;
      left: -20px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #000;
    }
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    &-main {
      &:first-child:before {
        border: none;
      }
    }
  }
  &__icon {
    position: absolute;
    opacity: .1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
#section-1-text-main {
  padding: 0 10px;
}
</style>