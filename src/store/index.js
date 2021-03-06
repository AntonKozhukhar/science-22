import Vue from 'vue'
import Vuex from 'vuex'
import row1Img from '../assets/img/row-1-img.jpg'
import row2Img from '../assets/img/row-2-img.jpg'
import row3Img from '../assets/img/row-3-img.jpg'
import human from '../assets/img/human.png'
import hat from '../assets/img/hat.png'
import robot from '../assets/img/robot.png'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    textUa: {
      startPage: {
        title: 'НАУКА 22',
        subtitle: 'МИ ВІРИМО В НАУКУ. БУДУЄМО МАЙБУТНЄ.',
      },
      directions: {
        title: 'Пріоритетні напрямки діяльності НАУКА 22:',
        col1: {
          title: 'ЛЮДИНА 22',
          bgImage: human,
        },
        col2: {
          title: 'ТЕХНІКА 22',
          bgImage: robot,
        },
        col3: {
          title: 'ОСВІТА 22',
          bgImage: hat,
        },
      },
      sectionsList: {
        human22: {
          col1: {
            id: 1,
            title: 'ЛЮДИНА 22',
            mainText: 'людина майбутнього відчуває своє місце в світі та розкриває все різноманіття самопізнання, довгожитель зі стійкою психікою та здоровим тілом',
            img: row1Img,
          },
          col2: {
            id: 2,
            title: 'Ментальна гігієна',
            textList: [
              'Спосіб життя',
              'Будинок відпочинку для людей поважного віку',
              'Агротуризм',
              'Свобода від залежностей',
            ],
            bgImage: human,
          },
          col3: {
            id: 3,
            title: 'Діагностика та профілактика',
            textList: [
              'ДНК-лабораторія',
              'Медсервіс',
              'IT-технології для моніторингу та профілактики',
            ],
            bgImage: human,
          },
      
        },
        technic22: {
          col1: {
            id: 1,
            title: 'ТЕХНІКА 22',
            mainText: 'переведення нових технологій з лабораторій в повсякденне життя',
            img: row2Img,
          },
          col2: {
            id: 2,
            title: 'Механізми',
            textList: [
              'Винаходи та корисні моделі',
              'Дрони, роботи',
            ],
            bgImage: robot,
          },
          col3: {
            id: 3,
            title: 'Програмне забезпечення',
            textList: [
              'ПЗ для дронів та роботів',
              'ПЗ для смартфонів',
            ],
            bgImage: robot,
          },
        },
        education22: {
          col1: {
            id: 1,
            title: 'ОСВІТА 22',
            mainText: 'комбінація базових елементів людської діяльності для розв’язання проблем, управління собою, взаємодія з іншими та використання технологій (розвиток жорстких навичок (hard skills) та гнучких навичок (soft skills)',
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
            bgImage: hat,
          },
          col3: {
            id: 3,
            title: 'Soft skills',
            textList: [
              'Управління проєктами',
              'Вебінари',
              'Майстер-класи',
            ],
            bgImage: hat,
          },
        },
      },
      contactUs: [
        {
          id: 1,
          title: 'Хочеш з нами?',
          text1: 'Маєш цікаві ідеї?',
          text2: 'Давай їх реалізуємо разом!',
          vacancies: {
            title: 'Вакансії за напрямками:',
            text1: 'комп’ютерний дизайн та графіка',
            text2: 'ДНК-лабораторія - керівник напрямку',
          },
          subList: {
            text1: 'Ми безпосередньо беремо участь у створенні майбутнього.',
            text2: 'Гайда з нами!',
            text3: 'Шукаємо (запрошуємо) професіоналів та тих, хто бажає ними стати в найближчому майбутньому',
            text4: 'Реалізуємо проєкти НАУКА 22 разом!',
          },
        },
      ],
      form: {
        name: 'Ім\'я',
        email: 'Пошта',
        message: 'Повідомлення',
        button: 'Відправити',
      }
    },
    // textEng: {
    //   startPage: {
    //     title: 'НАУКА 22',
    //     subtitle: 'МИ ВІРИМО В НАУКУ. БУДУЄМО МАЙБУТНЄ.',
    //   },
    //   directions: {
    //     title: 'Пріоритетні напрямки діяльності НАУКА 22:',
    //     col1: 'ЛЮДИНА 22',
    //     col2: 'ТЕХНІКА 22',
    //     col3: 'ОСВІТА 22',
    //   },
    //   sectionsList: {
    //     human22: {
    //       col1: {
    //         id: 1,
    //         title: 'ЛЮДИНА 22',
    //         mainText: 'людина майбутнього відчуває своє місце в світі та розкриває все різноманіття самопізнання, довгожитель зі стійкою психікою та здоровим тілом',
    //         img: row1Img,
    //       },
    //       col2: {
    //         id: 2,
    //         title: 'Ментальна гігієна',
    //         textList: [
    //           'Спосіб життя',
    //           'Будинок відпочинку для людей поважного віку',
    //           'Агротуризм',
    //           'Свобода від залежностей',
    //         ],
    //         iconClass: '_icon-human',
    //       },
    //       col3: {
    //         id: 3,
    //         title: 'Діагностика та профілактика',
    //         textList: [
    //           'ДНК-лабораторія',
    //           'Медсервіс',
    //           'IT-технології для моніторингу та профілактики',
    //         ],
    //         iconClass: '_icon-human',
    //       },
    //
    //     },
    //     technic22: {
    //       col1: {
    //         id: 1,
    //         title: 'ТЕХНІКА 22',
    //         mainText: 'переведення нових технологій з лабораторій в повсякденне життя, де роботам доведеться співіснувати і співпрацювати з людьми',
    //         img: row2Img,
    //       },
    //       col2: {
    //         id: 2,
    //         title: 'Механізми',
    //         textList: [
    //           'Винаходи та корисні моделі',
    //           'Дрони',
    //           'Роботи',
    //         ],
    //         iconClass: '_icon-robot',
    //       },
    //       col3: {
    //         id: 3,
    //         title: 'Програмне забезпечення',
    //         textList: [
    //           'Програмне забезпечення для дронів та роботів',
    //           'ПЗ для смартфонів',
    //         ],
    //         iconClass: '_icon-robot',
    //       },
    //     },
    //     education22: {
    //       col1: {
    //         id: 1,
    //         title: 'ОСВІТА 22',
    //         mainText: 'комбінація базових елементів людської діяльності для розв’язання проблем, управління собою, взаємодія з іншими та використання технологій (розвиток жорстких навичок (hard skills) та гнучких навичок (soft skills)',
    //         img: row3Img,
    //       },
    //       col2: {
    //         id: 2,
    //         title: 'Hard skills',
    //         textList: [
    //           'Проєкт «Нова професія»',
    //           'Професійні конференції',
    //           'Online курси',
    //         ],
    //         iconClass: '_icon-hat',
    //       },
    //       col3: {
    //         id: 3,
    //         title: 'Soft skills',
    //         textList: [
    //           'Управління проєктами',
    //           'Вебінари',
    //           'Майстер-класи',
    //         ],
    //         iconClass: '_icon-hat',
    //       },
    //     },
    //   },
    //   contactUs: [
    //     {
    //       id: 1,
    //       title: 'Хочеш з нами?',
    //       text1: 'Маєш цікаві ідеї?',
    //       text2: 'Давай їх реалізуємо разом!',
    //       vacancies: {
    //         title: 'Вакансії за напрямками:',
    //         text1: 'комп’ютерний дизайн та графіка',
    //         text2: 'DNA laboratory - керівник напрямку',
    //       },
    //       subList: {
    //         text1: 'Ми безпосередньо беремо участь у створенні майбутнього.',
    //         text2: 'Гайда з нами!',
    //         text3: 'Шукаємо (запрошуємо) професіоналів та тих, хто бажає ними стати в найближчому майбутньому',
    //         text4: 'Реалізуємо проекти НАУКА 22 разом!',
    //       },
    //     },
    //   ],
    //   form: {
    //     name: 'Ім\'я',
    //     email: 'Пошта',
    //     message: 'Повідомлення',
    //     button: 'Відправити',
    //   }
    // }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getStartPage: state => state.textUa.startPage,
    getDirections: state => state.textUa.directions,
    getSections: state => state.textUa.sectionsList,
    getContactUs: state => state.textUa.contactUs,
    getForm: state => state.textUa.form,
  },
  modules: {
  }
})
