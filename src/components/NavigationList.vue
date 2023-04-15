<script setup>
import { NAVIGATION_LIST } from '@/constants/NavigationList.js'
import { useToggle } from '@/use/useToggle'
const { state: isMenuOpen, toggling: toggleMenu } = useToggle(false)
function fs() {
  console.log('fgdfgffdg')
}
</script>

<template>
  <div>
    <button class="menu__burger" @click="toggleMenu" @keyup.esc="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav :class="['menu', { menu_open: isMenuOpen }]">
      <button class="menu__close" @click="toggleMenu" @keyup.esc="toggleMenu">
        <span></span>
        <span></span>
      </button>
      <ul class="menu__list justify-content-end">
        <li v-for="item in NAVIGATION_LIST" :key="item.id" class="menu__item">
          <a :href="item.url" class="menu__link" @click="fs">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.menu {
  visibility: hidden;
  transform: translate(100%, 0);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  max-width: 350px;
  width: 100%;
  background: var(--red-primary);
  overflow-y: auto;
  padding: 90px 20px;
  z-index: var(--zIndexBurgerMenu);
  transition: transform 0.5s, visibility 0.5s;
  @include respond-to(tb) {
    position: static;
    visibility: visible;
    transform: none;
    max-width: none;
    width: auto;
    background: transparent;
    overflow: auto;
    padding: 0;
    transition: transform 0s, visibility 0s;
  }

  &__close {
    width: 40px;
    height: 40px;
    color: var(--white-primary);
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    top: 26px;
    cursor: pointer;
    transition: color 0.5s ease;
    span {
      width: 30px;
      height: 3px;
      background: var(--white-primary);
      display: block;
      transition: background-color 0.4s, opacity 0.25s, transform 0.4s;
      border-radius: 3px;
    }
    span:first-child {
      transform: rotate(-45deg);
    }
    span:nth-child(2) {
      transform: rotate(45deg);
      position: relative;
      top: -3px;
    }
    &:hover,
    &:focus-visible {
      span {
        background: var(--blue-primary);
      }
    }
    @include respond-to(tb) {
      display: none;
    }
  }
  &__list {
    display: block;
    @include respond-to(tb) {
      display: flex;
    }
  }
  &__item {
    font-size: 25px;
    border-bottom: 1px solid var(--white-primary);
    color: var(--white-primary);
    @include respond-to(tb) {
      border: none;
      margin-left: 20px;
    }
    &:not(:last-child) {
      border-top: 1px solid var(--white-primary);
      @include respond-to(tb) {
        border: none;
      }
    }
  }
  &_open {
    transition: transform 0.5s, visibility 0.5s;
    transform: translate(0, 0);
    visibility: visible;
  }
  &__burger {
    position: relative;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    span {
      position: absolute;
      width: 30px;
      height: 3px;
      background: var(--white-primary);
      left: 5px;
      display: block;
      transition: background-color 0.4s, opacity 0.25s, transform 0.4s;
      border-radius: 3px;
    }
    span:nth-child(1) {
      transform: translateY(-10px);
    }
    span:nth-child(3) {
      transform: translateY(10px);
    }
    &:focus-visible {
      span {
        background: var(--red-primary);
      }
    }
    @include respond-to(tb) {
      display: none;
    }
  }
  &__link {
    position: relative;
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 10px;
    border: none;
    outline: none;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: color 0.5s ease;
    &::before {
      content: '#';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: var(--white-primary);
      transition: color 0.5s ease;
    }
    &:focus-visible {
      color: var(--blue-primary);
      &::before {
        color: var(--blue-primary);
      }
    }
    &:hover {
      color: var(--blue-primary);
      &::before {
        color: var(--blue-primary);
      }
    }
    @include respond-to(tb) {
      padding: 0px;
      padding-left: 15px;
      border-top: none;
      font-size: 16px;
      &:hover,
      &:focus-visible {
        color: var(--red-primary);
        border-bottom: 1px solid var(--red-primary);
        &::before {
          color: var(--red-primary);
        }
      }
    }
  }
}
</style>
