<script setup>
import { defineProps } from 'vue'
defineProps({
  percent: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="skill">
    <v-title :level="3" class="skill__name">
      <slot>{{ name }}</slot>
    </v-title>
    <div class="skill__percent">
      <span>{{ percent }}%</span>
    </div>
    <div class="skill__progress-bar">
      <div
        :class="['skill__scale', `skill__scale_${name}`]"
        :style="{ width: percent + '%' }"
      ></div>
    </div>
  </article>
</template>

<style lang="scss">
.skill {
  letter-spacing: 2px;
  margin-top: 10px;
  color: inherit;
  &__percent {
    margin-bottom: 9px;
    display: inline-block;
  }
  &__name {
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  &__progress-bar {
    background: var(--grey-color-dark);
    width: 100%;
    height: 10px;
    border-radius: 5px;
  }
  &__scale {
    height: 10px;
    border-radius: 5px;
    background: var(--green-color);
    &_scss {
      background: var(--scss-color);
      animation: scale-anim_scss ease 3s infinite;
    }
    &_html {
      background: var(--html-color);
      animation: scale-anim_html ease 3s infinite;
    }
    &_javascript {
      background: var(--js-color);
      animation: scale-anim_js ease 3s infinite;
    }
    &_vue {
      background: var(--vue-color);
      animation: scale-anim_vue ease 3s infinite;
    }
    &_php {
      background: var(--php-color);
      animation: scale-anim_php ease 3s infinite;
    }
    &_nodejs {
      background: var(--nodejs-color);
      animation: scale-anim_nodejs ease 3s infinite;
    }
  }
}
</style>
