<template>
  <main class='content'>
    <directions/>
    <section-component v-for='(section,key) in sectionsList'
                       :key='key'
                       :keyProp='key'
                       :section='section'/>
    <contact-us/>
  </main>
</template>
<script>
import Directions from './Directions'
import sectionComponent from './sectionComponent'
import ContactUs from './ContactUs'
import row1Img from '../assets/img/row-1-img.jpg'
import row2Img from '../assets/img/row-2-img.jpg'
import row3Img from '../assets/img/row-3-img.jpg'

export default {
  name: 'contentComponent',
  components: {ContactUs, Directions, sectionComponent},
  data() {
    return {
      sectionsList: {
        human22: {
          col1: {
            id: 1,
            title: 'ЛЮДИНА 22',
            textList: [
              'Людина майбутнього відчуває своє місце в світі та розкриває все різноманіття самопізнання, довгожитель зі стійкою психікою та здоровим тілом',
            ],
            img: row1Img,
          },
          col2: {
            id: 2,
            title: 'Діагностика та профілактика',
            textList: [
              'DNA laboratory',
              'Mediservice',
              'IT-технології для моніторингу та профілактики',
            ],
            iconClass: '_icon-human',
          },
          col3: {
            id: 3,
            title: 'Ментальна гігієна',
            textList: [
              'Будинок відпочинку для людей поважного віку',
              'Агротуризм',
              'Свобода від залежностей',
              'Спосіб життя',
            ],
            iconClass: '_icon-human',
          },
        },
        technic22: {
          col1: {
            id: 1,
            title: 'ТЕХНІКА 22',
            textList: [
              'Напрямок включає:',
              'інтеграція нових технологій у повсякденне життя',
              'розвиток робототехніки та дронів',
            ],
            img: row2Img,
          },
          col2: {
            id: 2,
            title: 'Механізми',
            textList: [
              'Винаходи та корисні моделі',
              'Дрони',
              'Роботи',
            ],
            iconClass: '_icon-robot',
          },
          col3: {
            id: 3,
            title: 'Програмне забезпечення',
            textList: [
              'ПЗ для смартфонів',
              'Програмне забезпечення для дронів та роботів',
              'ПЗ для мисливців',
            ],
            iconClass: '_icon-robot',
          },
        },
        education22: {
          col1: {
            id: 1,
            title: 'ОСВІТА 22',
            textList: [
              'Напрямок включає:',
              'Розвиток жорстких навичок (hard skills) – професійних та технічних компетенцій, які необхідні для конкретної роботи',
              'Розвиток гнучких навичок (soft skills) – додаткових знань, вмінь, особистих якостей та соціальних компетенцій, комунікативних навичок та креативних здібностей',
            ],
            img: row3Img,
          },
          col2: {
            id: 2,
            title: 'Hard skills',
            textList: [
              'Проєкт «Нова професія»',
              'Професійні конференції',
              'Online курси',
            ],
            iconClass: '_icon-hat',
          },
          col3: {
            id: 3,
            title: 'Soft skills',
            textList: [
              'Управління проєктами',
              'Програмне забезпечення для дронів та роботів',
              'Майстер-класи',
            ],
            iconClass: '_icon-hat',
          },
        },
      },
    }
  },
}
</script>
