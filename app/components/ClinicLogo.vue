<script setup lang="ts">
withDefaults(defineProps<{ stacked?: boolean }>(), { stacked: false });
</script>

<template>
  <svg
    class="clinic-logo"
    :class="{ 'clinic-logo-stacked': stacked }"
    :viewBox="stacked ? '590 320 710 650' : '265 525 1355 285'"
    role="img"
    aria-label="みなと歯科クリニック"
  >
    <image
      :href="stacked ? '/images/牙科诊所logo.png' : '/images/牙科诊所logo2.png'"
      width="1888"
      height="1334"
    />
  </svg>
</template>
