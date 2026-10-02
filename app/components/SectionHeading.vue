<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; centered?: boolean }>();
</script>
<template>
  <div class="section-heading" :class="{ 'text-center': centered }">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <span class="heading-line" />
  </div>
</template>
