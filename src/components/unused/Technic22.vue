<template>
  <section class='technic'>
    <div class='container'>
      <div class='technic__row'>
        <div class='technic__col technic__col-main'>
          <div class='technic__item technic__item-main'>
            <h3 class='technic__title technic__title-main'>{{ technicList[0].title }}</h3>
            <ul class='technic__list'>
              <li class='technic__text technic__text-main'>{{ technicList[0].subList.text1 }}</li>
              <li class='technic__text technic__text-main'>{{ technicList[0].subList.text2 }}</li>
              <li class='technic__text technic__text-main'>{{ technicList[0].subList.text3 }}</li>
            </ul>
            <div class='technic__img'>
              <img src='../../assets/img/row-2-img.jpg' alt='technics'>
            </div>
          </div>
        </div>
        <div class='technic__col _icon-robot'>
          <div class='technic__item'>
            <h3 class='technic__title'>{{ technicList[1].title }}</h3>
            <ul class='technic__list'>
              <li class='technic__text'>{{ technicList[1].subList.text1 }}</li>
              <li class='technic__text'>{{ technicList[1].subList.text2 }}</li>
              <li class='technic__text'>{{ technicList[1].subList.text3 }}</li>
            </ul>
          </div>
        </div>
        <div class='technic__col _icon-robot'>
          <div class='technic__item'>
            <h3 class='technic__title'>{{ technicList[2].title }}</h3>
            <ul class='technic__list'>
              <li class='technic__text'>{{ technicList[2].subList.text1 }}</li>
              <li class='technic__text'>{{ technicList[2].subList.text2 }}</li>
              <li class='technic__text'>{{ technicList[2].subList.text3 }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'technic22',
  data() {
    return {
      technicList: [
        {
          id: 1,
          title: 'ТЕХНІКА 22',
          subList: {
            text1: 'Напрямок включає:',
            text2: 'інтеграція нових технологій у повсякденне життя',
            text3: 'розвиток робототехніки та дронів',
          },
        },
        {
          id: 2,
          title: 'Механізми',
          subList: {
            text1: 'Винаходи та корисні моделі',
            text2: 'Дрони',
            text3: 'Роботи',
          },
        },
        {
          id: 3,
          title: 'Програмне забезпечення',
          subList: {
            text1: 'ПЗ для смартфонів',
            text2: 'Програмне забезпечення для дронів та роботів',
            text3: 'ПЗ для мисливців',
          },
        },
      ],
    }
  },
}
</script>

<style scoped lang='scss'>

.technic {
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
