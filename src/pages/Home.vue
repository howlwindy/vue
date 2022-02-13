<script setup lang="ts">
import { ref } from 'vue'
let count = ref<number>(0)
</script>
<template>
  <section class="toc">
    <router-link :to="{ name: 'BuildInComponents' }">
      Build-in components
    </router-link>
    <router-link :to="{ name: 'Directive' }">Directive</router-link>
    <router-link :to="{ name: 'BaseReactivityApis' }">Reactivity</router-link>
    <router-link :to="{ name: 'CompositionApi' }">Composition</router-link>
    <router-link :to="{ name: 'SingleFileComponents' }">
      Single File Components
    </router-link>
  </section>
  <h1>Harder Better Faster Stronger - Vue</h1>
  <button @click="count++">click {{ count }} times already.</button>
</template>
<style scoped lang="scss"></style>
