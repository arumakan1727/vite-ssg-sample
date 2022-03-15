<script setup lang="ts">
import pages from '~pages';
import { extractChildrenComponents } from '@/modules/extractChildrenComponents'
import { reactive } from 'vue';

export interface PostMeta {
  post_date?: string,
  last_updated?: string,
  title?: string,
  meta?: { name: string, content: string },
};

const state = reactive<{
  articles: PostMeta[]
}>({
  articles: [],
});

console.log("===== pages ====\n", pages);
extractChildrenComponents(pages, '/articles').then(components => {
  const metas = (components as any[]).map(c => ({
    post_date: c.post_date,
    last_updated: c.last_updated,
    title: c.title,
    meta: c.meta,
  } as PostMeta));

  console.log("metas:", metas);

  state.articles.splice(0, state.articles.length, ...metas);
});
</script>

<template>
  <h1>This is article list vue</h1>
  <router-link to="/">Goto Top page</router-link>

  <pre>{{ pages }}</pre>

  <hr/>

  <pre>{{ state.articles }}</pre>
</template>
