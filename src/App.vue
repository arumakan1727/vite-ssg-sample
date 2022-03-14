<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'title (App.vue)',
  meta: [
    { name: 'description', content: 'neko' },
  ],
})
</script>

<template>
  <router-view />
</template>
