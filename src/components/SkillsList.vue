<script setup>
import SkillsItem from './SkillsItem.vue'
import { SKILLS_LIST } from '@/constants/SkillsList'
</script>

<template>
  <ul class="skills-list">
    <li v-for="skill in SKILLS_LIST" :key="skill.id" class="skills-list__item">
      <skills-item :percent="skill.percent" :name="skill.name"></skills-item>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
