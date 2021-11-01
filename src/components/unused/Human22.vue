<template>
  <section class='human'>
    <div class='container'>
      <div class='human__row'>
        <div class='human__col human__col-main'>
          <div class='human__item human__item-main'>
            <h3 class='human__title human__title-main'>{{ humanList[0].title }}</h3>
            <p class='human__text-main'>{{ humanList[0].text }}</p>
            <div class='human__img'>
              <img src='../../assets/img/row-1-img.jpg' alt='humans'>
            </div>
          </div>
        </div>
        <div class='human__col _icon-human'>
          <div class='human__item'>
            <h3 class='human__title'>{{ humanList[1].title }}</h3>
            <ul class='human__list'>
              <li class='human__text'>{{ humanList[1].text1 }}</li>
              <li class='human__text'>{{ humanList[1].text2 }}</li>
              <li class='human__text'>{{ humanList[1].text3 }}</li>
            </ul>
          </div>
        </div>
        <div class='human__col _icon-human'>
          <div class='human__item'>
            <h3 class='human__title'>{{ humanList[2].title }}</h3>
            <ul class='human__list'>
              <li class='human__text'>{{ humanList[2].text1 }}</li>
              <li class='human__text'>{{ humanList[2].text2 }}</li>
              <li class='human__text'>{{ humanList[2].text3 }}</li>
              <li class='human__text'>{{ humanList[2].text4 }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'human22',
  data() {
    return {
      humanList: [
        {
          id: 1,
          title: 'ЛЮДИНА 22',
          text: 'Людина майбутнього відчуває своє місце в світі та розкриває все різноманіття самопізнання, довгожитель зі стійкою психікою та здоровим тілом',
        },
        {
          id: 2,
          title: 'Діагностика та профілактика',
          text1: 'DNA laboratory',
          text2: 'Mediservice',
          text3: 'IT-технології для моніторингу та профілактики',
        },
        {
          id: 3,
          title: 'Ментальна гігієна',
          text1: 'Будинок відпочинку для людей поважного віку',
          text2: 'Агротуризм',
          text3: 'Свобода від залежностей',
          text4: 'Спосіб життя',
        },
      ],
    }
  },
}
</script>

<style scoped lang='scss'>

.human {
  border-top: 15px dotted #00dae3;
  border-bottom: 15px dotted #00dae3;
  padding: 50px 0;
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
    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 180px;
      color: rgba(0, 113, 137, .1);
    }
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
    box-shadow: 0 0 40px 5px rgb(0, 0, 0, .5);
    padding: 20px 10px;
    border-radius: 20px;
    transition: .3s;
    display: flex;
    flex-direction: column;
    @media (min-width: 992px) {
      &:hover {
        transform: scale(1.1);
        background: rgba(0, 218, 227, .1);
        cursor: pointer;
      }
    }
    &-main {
      box-shadow: 0 0 40px 5px rgb(0, 0, 0, .5);
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
      padding: 0 10px;
    }
  }
}

</style>
