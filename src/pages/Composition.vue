<script setup lang="ts">
import ProvideVue from '@/models/composition/Provide.vue'
import GetCurrentInstanceVue from '@/models/composition/GetCurrentInstance.vue'
</script>
<template>
  <section class="toc">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'LifecycleHooks' }">Lifecycle Hooks</router-link>
  </section>
  <h1>Composition</h1>
  <ProvideVue></ProvideVue>
  <GetCurrentInstanceVue></GetCurrentInstanceVue>
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>
