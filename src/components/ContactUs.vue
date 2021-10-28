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
        <form name='contact' class='contact__form form' @submit.prevent='onSubmit'>
          <div class='form__input-wrapper'>
            <input
              class='form__input _input'
              type='text'
              name='userName'
              id='name'
              v-model.trim='userName'
              :class='{
                invalid: $v.userName.$dirty && !$v.userName.required,
                valid: $v.userName.$dirty && $v.userName.required,
              }'
            />
            <label :class='{ active: userName }' for='name'>Ім'я</label>
            <span v-if='$v.userName.$dirty && !$v.userName.required' class='form__error'>Введіть ім'я</span>
          </div>
          <div class='form__input-wrapper'>
            <input class='form__input _input'
                   type='text'
                   name='userEmail'
                   id='email'
                   v-model.trim='userEmail'
                   :class='{
                      invalid:
                        ($v.userEmail.$dirty && !$v.userEmail.required) ||
                        ($v.userEmail.$dirty && !$v.userEmail.email),
                      valid:
                        ($v.userEmail.$dirty && !$v.userEmail.required) ||
                        ($v.userEmail.$dirty && $v.userEmail.email),
                   }'/>
            <label :class='{ active: userEmail }' for='email'>Пошта</label>
            <span v-if='$v.userEmail.$dirty && !$v.userEmail.required' class='form__error'>Введіть пошту</span>
            <span v-else-if='$v.userEmail.$dirty && !$v.userEmail.email' class='form__error'>Пошта не коректна</span>
          </div>
          <div class='form__input-wrapper'>
            <textarea class='form__textarea _input'
                      name='userText'
                      id='textarea'
                      v-model.trim='userText'
                      :class='{
                        invalid: $v.userText.$dirty && !$v.userText.required,
                        valid: $v.userText.$dirty && $v.userText.required,
                      }'
            >
            </textarea>
            <label for='textarea' :class='{ active: userText }'>Повідомлення</label>
            <span v-if='$v.userText.$dirty && !$v.userText.required' class='form__error'>Введіть повідомлення</span>
          </div>
          <span class='form__submitted'>Відправлено</span>
          <button class='form__button' type='submit'>Відправити</button>
        </form>
      </div>
      <ul class='contact__list'>
        <li class='contact__item'
            v-for='item of educationList[0].subList'
            :key='item'>
          {{ item }}
        </li>
      </ul>
      <button class='scroll' id='scroll-bottom' v-scroll-to="{ el: '.start' }"></button>
    </div>
  </section>
</template>

<script>
import {email, required} from 'vuelidate/lib/validators'

export default {
  name: 'ContactUs',
  validations: {
    userName: {required},
    userEmail: {email, required},
    userText: {required},
  },
  data() {
    return {
      userName: '',
      userEmail: '',
      userText: '',
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
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        this.formSend()
      }
    },
    async formSend() {
      const formData = {
        userName: this.userName,
        userEmail: this.userEmail,
        userText: this.userText,
      }
      let response = await fetch('sendmail.php', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formData),
      })
      console.log(response.body)
      if (response.ok) {
        let result = await response.json()
        console.log(result.message)
        this.addSubmitMessage()
        this.clearForm()
      }
    },
    addSubmitMessage() {
      const submitted = document.querySelector('.form__submitted')
      submitted.style.opacity = '1'
      setTimeout(() => (submitted.style.opacity = '0'), 1000)
    },
    clearForm() {
      this.$v.$reset()
      this.userName = ''
      this.userEmail = ''
      this.userText = ''
    },
  },
}
</script>

<style scoped lang='scss'>
.contact {
  border-top: 15px dotted #00dae3;
  padding: 50px 0;
  font-size: 25px;
  position: relative;
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
.form {
  display: flex;
  flex-direction: column;
  flex: 0 1 40%;
  position: relative;
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-width: 479px) {
    width: 100%;
  }
  &__input-wrapper {
    margin-bottom: 30px;
    position: relative;
    &:nth-child(3) {
      .form__error {
        top: 202px;
      }
    }
  }
  &__input {
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #14274a;
    font-size: 25px;
    width: 100%;
  }
  &__error {
    font-size: 16px;
    color: red;
    position: absolute;
    top: 77px;
    left: 0;
  }
  &__textarea {
    height: 200px;
    resize: none;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #14274a;
    font-size: 25px;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }
  &__submitted {
    position: absolute;
    bottom: 77px;
    font-size: 20px;
    color: #3be03b;
    opacity: 0;
    transition: 0.5s;
  }
  &__button {
    padding: 20px 0;
    width: 250px;
    font-size: 25px;
    color: #fff;
    background: #00dae3;
    border-radius: 15px;
    transition: 0.3s;
    font-weight: bold;
    box-shadow: 4px 4px 0 0 #04a6ad;
    align-self: flex-end;
    position: relative;
    top: 0;
    left: 0;
    &:active {
      top: 2px;
      left: 2px;
      box-shadow: 2px 2px 0 0 #04b9c1;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
    @media (min-width: 767px) {
      &:hover {
        background: #04b9c1;
      }
    }
  }
}
.valid {
  border: 2px solid #3be03b;
}
.invalid {
  border: 2px solid red;
}
.active {
  transform: translateY(-20px);
  font-size: 20px;
}
label {
  color: #14274a;
  transition: 0.3s;
  font-size: 25px;
  position: absolute;
  left: 22px;
  cursor: text;
  top: 25px;
  z-index: 1;
}
.scroll {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  bottom: 25px;
  right: 25px;
  position: relative;
  float: right;
  border: 2px solid #04a6ad;
  &:before {
    content: '';
    position: absolute;
    left: 12px;
    width: 23px;
    height: 23px;
    top: 17px;
    transform: rotate(45deg);
    border-left: 6px solid #04a6ad;
    border-top: 6px solid #04a6ad;
  }
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
    bottom: -5px;
    right: 10px;
    &:before {
      left: 10px;
      top: 14px;
      width: 18px;
      height: 18px;
      border-left: 4px solid #04a6ad;
      border-top: 4px solid #04a6ad;
    }
  }
}
</style>
