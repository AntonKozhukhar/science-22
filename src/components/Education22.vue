<template>
  <section class='education'>
    <div class='container'>
      <div class='education__row'>
        <div class='education__col education__col-main'>
          <div class='education__item education__item-main'>
            <h3 class='education__title education__title-main'>{{ educationList[0].title }}</h3>
            <ul class='education__list'>
              <li class='education__text education__text-main'>{{ educationList[0].subList.text1 }}</li>
              <li class='education__text education__text-main'>{{ educationList[0].subList.text2 }}</li>
              <li class='education__text education__text-main'>{{ educationList[0].subList.text3 }}</li>
            </ul>
            <div class='education__img'>
              <img src='../assets/img/row-3-img.jpg' alt='educations'>
            </div>
          </div>
        </div>
        <div class='education__col _icon-hat'>
          <div class='education__item'>
            <h3 class='education__title'>{{ educationList[1].title }}</h3>
            <ul class='education__list'>
              <li class='education__text'>{{ educationList[1].subList.text1 }}</li>
              <li class='education__text'>{{ educationList[1].subList.text2 }}</li>
              <li class='education__text'>{{ educationList[1].subList.text3 }}</li>
            </ul>
          </div>
        </div>
        <div class='education__col _icon-hat'>
          <div class='education__item'>
            <h3 class='education__title'>{{ educationList[2].title }}</h3>
            <ul class='education__list'>
              <li class='education__text'>{{ educationList[2].subList.text1 }}</li>
              <li class='education__text'>{{ educationList[2].subList.text2 }}</li>
              <li class='education__text'>{{ educationList[2].subList.text3 }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'education22',
  data() {
    return {
      educationList: [
        {
          id: 1,
          title: 'ОСВІТА 22',
          subList: {
            text1: 'Напрямок включає:',
            text2: 'Розвиток жорстких навичок (hard skills) – професійних та технічних компетенцій, які необхідні для конкретної роботи',
            text3: 'Розвиток гнучких навичок (soft skills) – додаткових знань, вмінь, особистих якостей та соціальних компетенцій, комунікативних навичок та креативних здібностей',
          },
        },
        {
          id: 2,
          title: 'Hard skills',
          subList: {
            text1: 'Проєкт «Нова професія»',
            text2: 'Професійні конференції',
            text3: 'Online курси',
          },
        },
        {
          id: 3,
          title: 'Soft skills',
          subList: {
            text1: 'Управління проєктами',
            text2: 'Програмне забезпечення для дронів та роботів',
            text3: 'Майстер-класи',
          },
        },
      ],
    }
  },
}
</script>

<style scoped lang='scss'>

.education {
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
      font-size: 140px;
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
    width: 100%;
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
    padding-right: 10px;
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
}

</style>
