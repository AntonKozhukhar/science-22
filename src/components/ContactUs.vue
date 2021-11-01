<!--suppress ALL -->
<template>
  <section class='contact' id='contact'>
    <div class='container'>
      <div class='contact__top'>
        <div class='contact__text'>
          <h3 class='contact__title'>{{ educationList[0].title }}</h3>
          <h4 class='contact__title'>{{ educationList[0].text1 }}</h4>
          <h4 class='contact__title'>{{ educationList[0].text2 }}</h4>
          <ul class='contact__vacancies'>
            <li class='contact__vacancies-item'
                v-for='item of educationList[0].vacancies'
                :key='item'>
              {{ item }}
            </li>
          </ul>
        </div>
        <form-component/>
      </div>
      <ul class='contact__list'>
        <li class='contact__item'
            v-for='item of educationList[0].subList'
            :key='item'>
          {{ item }}
        </li>
      </ul>
      <img src='../assets/img/arrow-scroll.png'
           alt='img-scroll'
           class='scroll'
           id='scroll-bottom'
           v-scroll-to="{ el: '.start' }"/>
    </div>
  </section>
</template>

<script>
import FormComponent from './FormComponent'

export default {
  name: 'ContactUs',
  components: {FormComponent},
  data() {
    return {
      educationList: [
        {
          id: 1,
          title: 'Хочеш з нами?',
          text1: 'Маєш цікаві ідеї?',
          text2: 'Давай їх реалізуємо разом!',
          vacancies: {
            title: 'Вакансії за напрямками:',
            text1: 'комп’ютерний дизайн та графіка',
            text2: 'DNA laboratory - керівник напрямку',
          },
          subList: {
            text1: 'Ми безпосередньо беремо участь у створенні майбутнього.',
            text2: 'Гайда з нами!',
            text3: 'Шукаємо (запрошуємо) професіоналів та тих, хто бажає ними стати в найближчому майбутньому',
            text4: 'Реалізуємо проекти НАУКА 22 разом!',
          },
        },
      ],
    }
  },
}
</script>

<style scoped lang='scss'>
.contact {
  border-top: 15px dotted $mainColor;
  padding: 50px 0;
  font-size: 25px;
  position: relative;
  @media (max-width: 767px) {
    padding: 30px 0 50px 0;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  &__text {
    flex: 0 1 60%;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }
  &__title {
    margin-bottom: 30px;
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  &__vacancies-item {
    &:first-child {
      font-size: 25px;
      margin-bottom: 15px;
      @media (max-width: 767px) {
        text-align: center;
      }
    }
    margin-bottom: 10px;
    font-size: 20px;
    position: relative;
    &:not(&:first-child) {
      padding-left: 20px;
      &:before {
        content: '';
        position: absolute;
        left: 4px;
        top: 4px;
        width: 6px;
        height: 13px;
        border: solid #14274a;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
  &__list {
    width: 60%;
    @media (max-width: 767px) {
      text-align: center;
      width: 100%;
    }
  }
  &__item {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
.scroll {
  width: 50px;
  height: 50px;
  bottom: 25px;
  right: 25px;
  position: relative;
  float: right;
  transform: rotate(180deg);
  cursor: pointer;
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
    bottom: -5px;
    right: 10px;
  }
}
</style>
