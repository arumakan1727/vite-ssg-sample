<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Index page'
})
</script>

<template>
  <h1>This is Index vue</h1>
  <p>Hello world!</p>
  <router-link to="/about">Goto About page</router-link>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
