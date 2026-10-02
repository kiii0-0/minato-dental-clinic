<script setup lang="ts">
withDefaults(
  defineProps<{
    name?:
      | "arrow-up-right"
      | "arrow-up"
      | "arrow-down"
      | "plus"
      | "close"
      | "menu"
      | "flower";
  }>(),
  { name: "arrow-up-right" },
);
</script>

<template>
  <svg
    class="ui-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-if="name === 'arrow-up-right'" d="M6 18 18 6M6 6h12v12" />
    <path v-else-if="name === 'arrow-up'" d="M12 20V4m-7 7 7-7 7 7" />
    <path v-else-if="name === 'arrow-down'" d="M12 4v16m-7-7 7 7 7-7" />
    <path v-else-if="name === 'plus'" d="M12 5v14M5 12h14" />
    <path v-else-if="name === 'close'" d="m6 6 12 12M6 18 18 6" />
    <path v-else-if="name === 'menu'" d="M4 6h16M4 12h16M4 18h16" />
    <template v-else-if="name === 'flower'">
      <path
        v-for="angle in [0, 60, 120, 180, 240, 300]"
        :key="angle"
        :transform="`rotate(${angle} 12 12)`"
        d="M12 12C4 7 8 1 12 3c4-2 8 4 0 9Z"
        fill="currentColor"
        stroke="none"
      />
      <circle cx="12" cy="12" r="2.2" fill="white" stroke="none" />
    </template>
  </svg>
</template>
