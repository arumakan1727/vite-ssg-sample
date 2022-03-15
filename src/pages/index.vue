<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Index page'
})
</script>

<template>
  <h1>This is Index vue</h1>
  <p>Hello world!</p>
  <ul>
    <li>
      <router-link to="/about">Goto About page</router-link>
    </li>
    <li>
      <router-link to="/markdown-test">Goto Markdown test page</router-link>
    </li>
    <li>
      <router-link to="/articles">Goto Articles page</router-link>
    </li>
  </ul>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
