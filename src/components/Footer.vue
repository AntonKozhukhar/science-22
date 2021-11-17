<template>
  <footer class='footer'>

    <div class='footer__wrapper container'>
      <span class='footer__logo _icon-atom'></span>
      <div class='footer__contacts contacts'>
        <a href='#' class='contacts__item _icon-location'>{{ contacts.location }}</a>
        <a href='tel:+380966731590' class='contacts__item _icon-phone'>{{ contacts.phone }}</a>
        <a href='mailto:anton.kozhukhar@gmail.com' class='contacts__item _icon-email'>{{ contacts.email }}</a>
      </div>
      <div class='footer__socials socials'>
        <a href='#' target='_blank' class='socials__item _icon-facebook'>{{ socials.facebook }}</a>
        <a href='#' target='_blank' class='socials__item _icon-instagram'>{{ socials.instagram }}</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'footerComponent',
  data() {
    return {
      contacts: {
        location: 'Vinnytsia',
        phone: '+380 96 673 15 90',
        email: 'anton.kozhukhar@gmail.com',
      },
      socials: {
        facebook: 'Facebook',
        instagram: 'Instagram',
      },
    }
  },
}
</script>
<style lang='scss'>
.footer {
  background: #24a0a5;
  color: #fff;
  padding: 20px 0;
  position: relative;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
    }
  }
  &__logo {
    width: 110px;
    height: 100px;
    position: relative;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 100px;
      animation: rotateLogo 20s linear infinite;
    }
    @media (max-width: 767px) {
      margin-bottom: 15px;
    }
  }

}
.contacts,
.socials {
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    color: #fff;
    transition: .3s;
    @media (max-width: 767px) {
      align-self: center;
      margin-bottom: 10px;
    }
    &:not(&:last-child) {
      margin-bottom: 10px;
    }
    &:before {
      margin-right: 10px;
    }
  }
  .socials {
    &__item {
      @media (min-width: 992px) {
        &:hover {
          color: #04575a;
        }
      }
    }
  }
}
</style>