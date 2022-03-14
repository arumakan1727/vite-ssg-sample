<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'About page'
})
</script>

<template>
  <h1>This is About vue</h1>
  <p>test test test</p>
  <router-link to="/">Goto Top page</router-link>
</template>

<route lang="yaml">
meta:
  layout: default
  title: About page
</route>
