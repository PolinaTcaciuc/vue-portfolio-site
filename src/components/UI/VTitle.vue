<script setup>
import { defineProps } from 'vue'
defineProps({
  level: {
    type: Number,
    default: 2
  }
})
</script>

<template>
  <div v-if="level === 2" class="subtitle-wrapper" tabindex="0">
    <component :is="`h${level}`" class="v-title subtitle">
      <slot/>
    </component>
  </div>
  <component :is="`h${level}`" v-else class="v-title">
    <slot />
  </component>
</template>

<style lang="scss">
.v-title {
  color: var(--white-primary);
}
.subtitle-wrapper {
  text-align: left;
  letter-spacing: 2px;
  position: relative;
  display: flex;
  align-items: center;
  transition: 0.5s all ease;
  &::after {
    content: '';
    border-top: 2px solid var(--red-primary);
    width: 300px;
    display: inline-block;
    transform: translateY(2px);
    transition: inherit;
  }
  &:focus {
    outline: none;

    &::after {
      border-top: 2px solid var(--white-primary);
    }
    .subtitle {
      color: var(--red-primary);
      transition: inherit;

      &::before {
        transition: inherit;
        color: var(--white-primary);
      }
    }
  }
  .subtitle {
    margin-right: 20px;
    padding-left: 35px;
    font-size: 32px;
    position: relative;
    transition: inherit;
    &::before {
      content: '#';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: var(--red-primary);
      transition: inherit;
    }
  }
}
</style>
