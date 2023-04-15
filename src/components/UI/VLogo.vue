<template>
  <div class="v-logo">
    <a href="#" class="logo__link"> &lt;/Hello world&gt; </a>
  </div>
</template>

<style lang="scss">
.logo {
  &__link {
    text-decoration: none;
    transition: all 0.7s ease;
    &:hover {
      color: var(--red-primary);
    }
    &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid var(--red-primary);
      color: var(--red-primary);
    }
  }
}
</style>
