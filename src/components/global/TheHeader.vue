<script setup></script>

<template>
  <div class="container">
    <header data-aos="fade-down" class="header row align-items-center">
      <VLogo class="col-3 flex-grow-1" />
      <div class="col d-flex justify-content-end">
        <NavigationList />
      </div>
    </header>
  </div>
</template>

<style lang="scss">
.header {
  min-height: var(--header-footer-height);
}
</style>
