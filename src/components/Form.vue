<template>
  <form name='contact' class='contact__form form' id='form' @submit.prevent='onSubmit'>
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
              }'/>
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
                      }'>
            </textarea>
      <label for='textarea' :class='{ active: userText }'>Повідомлення</label>
      <span v-if='$v.userText.$dirty && !$v.userText.required' class='form__error'>Введіть повідомлення</span>
    </div>
    <span class='form__submitted'>Відправлено</span>
    <button class='form__button' type='submit'>Відправити</button>
  </form>
</template>
<script>
import {email, required} from 'vuelidate/lib/validators'

export default {
  name: 'form-component',
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
    }
  },
  methods: {
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
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        let formData = {
          name: this.userName,
          email: this.userEmail,
          message: this.userText,
        }
        this.sendForm(formData)
      }
    },
    async sendForm(formData) {
      const form = document.getElementById('form')
      form.classList.add('_sending')
      let response = await fetch('https://formsubmit.co/ajax/anton.kozhukhar@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        form.classList.remove('_sending')
        this.addSubmitMessage()
        this.clearForm()
      }
    },
  },
}
</script>
<style scoped lang='scss'>
.form {
  display: flex;
  flex-direction: column;
  flex: 0 1 40%;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background: rgba(51, 51, 51, .5) url('../assets/img/loading.gif') center / 50px no-repeat;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
  }
  &._sending:after {
    opacity: 1;
    visibility: visible;
  }
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-width: 479px) {
    width: 100%;
  }
  &__input-wrapper {
    margin-bottom: 30px;
    position: relative;
    &:nth-child(3) > span {
      top: 203px;
    }
  }
  &__input {
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #14274a;
    font-size: 25px;
    width: 100%;
  }
  ._input {
    &:focus + label {
      transform: translateY(-20px);
      font-size: 20px;
    }
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
    transition: .5s;
  }
  &__button {
    padding: 20px 0;
    width: 250px;
    font-size: 25px;
    color: #fff;
    background: $mainColor;
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
</style>