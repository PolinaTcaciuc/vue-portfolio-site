<script setup>
import { defineProps } from 'vue'
defineProps({
  animationName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="aos-popup d-flex justify-content-center align-items-center"
    :data-aos="animationName"
    data-aos-mirror="true"
  >
    <p class="aos-popup__text">
      <slot></slot>
    </p>
  </div>
</template>
<style lang="scss">
.aos-popup {
  border: 2px solid var(--white-primary);
  font-size: 25px;
  padding: 10px 15px;
  border-radius: 10px;
  min-height: 80px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
}
.aos-popup__text {
  text-align: center;
  font-size: 20px;
}
</style>
