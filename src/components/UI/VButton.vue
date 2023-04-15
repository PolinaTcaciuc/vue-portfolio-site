<template>
  <button class="v-button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.v-button {
  border: none;
  padding: 8px 16px;
  min-width: 160px;
  min-height: 40px;
  text-transform: uppercase;
  font-weight: 600;
  background: none;
  border: 1px solid var(--red-primary);
  color: inherit;
  cursor: pointer;
  color: var(--white-primary);
  &_disabled {
    background: var(--grey-color-dark) !important;
    border: 1px solid var(--grey-color-dark) !important;
    cursor: not-allowed;
  }
  background: {
    image: linear-gradient(45deg, var(--red-primary) 50%, transparent 50%);
    position: 100%;
    size: 300%;
  }
  transition: background 300ms ease-in-out;
  &:hover,
  &:focus {
    background-position: 0;
    outline: none;
  }
  &:focus {
    border: 1px solid var(--white-primary);
  }
}
</style>
