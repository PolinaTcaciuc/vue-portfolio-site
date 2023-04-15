<template>
  <NuxtLayout>
    <section class="hero">
      <div class="container">
        <div class="hero__wrapper pt-4 d-flex row g-0 align-items-center">
          <div class="col-12 d-flex col-tb-7 flex-column">
            <div class="hero__content">
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
            <div class="hero__img-wrapper">
              <img
                src="@/assets/images/polinatcaciuc.jpg"
                alt="Polina Tcaciuc"
              />
            </div>
          </div>
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
</style>
