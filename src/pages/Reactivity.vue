<script setup lang="ts"></script>
<template>
  <section class="toc">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'BaseReactivityApis' }">
      base reactivity apis
    </router-link>
    <router-link :to="{ name: 'Refs' }">refs</router-link>
    <router-link :to="{ name: 'ComputedAndWatch' }">
      computed and watch
    </router-link>
    <router-link :to="{ name: 'EffectScope' }">effect scope</router-link>
  </section>
  <h1>reactivity</h1>
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>
