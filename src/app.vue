
<template>
  <NuxtLayout>
    <!-- hero section -->
    <section class="hero">
      <div class="container">
        <div class="hero__wrapper pt-4 d-flex row g-0 align-items-center">
          <div class="col-12 d-flex col-tb-7 flex-column">
            <div class="hero__content" data-aos="fade-right">
              <v-title :level="1" class="hero__title mb-4">
                Привет,меня зовут
                <br />
                <strong class="accent-color">Ткачук Полина</strong>
              </v-title>
              <span class="hero__text mb-5">Junior-frontend developer</span>
              <div class="hero__btns d-flex flex-column">
                <v-button class="mb-3 hero__btn hero__btn_portfolio"
                  >Проекты</v-button
                >
                <v-button class="mb-3 hero__btn hero__btn_pdf">PDF</v-button>
              </div>
            </div>
          </div>
          <div
            class="mb-4 col-12 col-tb-4 offset-tb-1 d-flex justify-content-center"
          >
            <div class="hero__img-wrapper" data-aos="fade-left">
              <img
                src="@/assets/images/polinatcaciuc.jpg"
                alt="Polina Tcaciuc"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- skills section -->
    <section class="skills">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <v-title :level="2" class="skills__title g-0 mb-5">
              Навыки
            </v-title>
          </div>
        </div>
        <div class="skills__joke row">
          <div class="col-6 d-flex">
            <aos-pop-up
              class="skills__joke-popup flex-grow-1"
              animation-name="fade-right"
            >
              Я просто из тех,кто любит
              <span class="accent-color">JavaScript</span>
            </aos-pop-up>
          </div>
          <div class="col-6 d-flex skills__joke-popup">
            <aos-pop-up class="flex-grow-1" animation-name="fade-left">
              и не только...
            </aos-pop-up>
          </div>
        </div>
        <div class="row align-items-center d-flex flex-column-tb">
          <div class="col-12 col-tb-6 mb-4">
            <SkillsList data-aos="fade-right" />
          </div>
          <div class="col-12 col-tb-6"></div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss">
/* hero */
.hero {
  min-height: calc(100vh - var(--header-footer-height));
  &__wrapper {
    flex-direction: column-reverse;
    @include respond-to(tb) {
      flex-direction: row !important;
    }
  }
  &__content {
    text-align: center;
    @include respond-to(tb) {
      text-align: left;
    }
  }
  &__img-wrapper {
    max-height: 300px;
    position: relative;
    max-width: 300px;
    &:after {
      content: "";
      position: absolute;
      right: -15px;
      bottom: 0;
      width: 50px;
      z-index: 1;
      height: 50px;
      bottom: 0;
      background: url("@/assets/images/decor/dots.png");
      background-position: 0% 0%;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &:before {
      content: "";
      position: absolute;
      left: -10px;
      width: 50px;
      z-index: 1;
      height: 50px;
      top: -20px;
      background: url("@/assets/images/decor/geometric.png");
      background-position: 0% 0%;
      background-repeat: no-repeat;
      background-size: contain;
    }
    img {
      max-width: 100%;
      border-radius: 20%;
    }
  }
  &__text {
    display: block;
    font-size: 25px;
    @include respond-to(tb) {
      font-size: 30px;
    }
  }
  &__title {
    display: block;
    font-size: 30px;
    @include respond-to(tb) {
      font-size: 40px;
    }
  }
  &__btns {
    @include respond-to(tb) {
      align-items: start !important;
    }
  }
}
/* skills */
.skills {
  padding-top: 50px;
  min-height: calc(100vh - 50px);
  position: relative;
  &:after {
    content: '';
    position: absolute;
    right: -28px;
    bottom: 0;
    width: 100px;
    z-index: 1;
    height: 150px;
    bottom: 0;
    background: url('@/assets/images/decor/rectangle.png');
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: contain;
    display: none;
    @include respond-to(tb) {
      display: block;
    }
  }
  &:before {
    content: '';
    position: absolute;
    left: -30px;
    width: 50px;
    z-index: 1;
    height: 50px;
    top: 0px;
    background: url('@/assets/images/decor/dots.png');
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: contain;
    display: none;
    @include respond-to(tb) {
      display: block;
    }
  }
  &__joke {
    margin-bottom: 120px;
    display: none;
    &-popup:nth-child(even) {
      position: relative;
      top: 90px;
    }
    @include respond-to(tb) {
      display: flex;
    }
  }
}

/* disabling the AOS library */
@media screen and (max-width: 750px) {
  [data-aos] {
    pointer-events: auto !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

</style>
