<script setup lang="ts">
defineProps<{ name?: string }>();
</script>
<template>
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'sparkle'">
      <path d="m24 6 4 13 13 5-13 4-4 14-4-14-13-4 13-5Z" />
      <path d="m38 5 1.5 4.5L44 11l-4.5 1.5L38 17l-1.5-4.5L32 11l4.5-1.5Z" />
    </template>
    <template v-else-if="name === 'smile'">
      <circle cx="24" cy="24" r="18" />
      <path d="M15 27c4 10 14 10 18 0M16 18h1M31 18h1" />
    </template>
    <template v-else-if="name === 'align'">
      <rect x="6" y="12" width="36" height="24" rx="9" />
      <path d="M6 24h36M16 12v24M24 12v24M32 12v24" />
      <path d="M13 21h6v6h-6M29 21h6v6h-6" />
    </template>
    <template v-else>
      <path
        d="M24 10C14 3 4 10 8 22c3 8 3 19 8 19s3-14 8-14 3 14 8 14 5-11 8-19C44 10 34 3 24 10Z"
      />
      <path d="M19 10c3 2 6 3 9 3" />
    </template>
  </svg>
</template>
