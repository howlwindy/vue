<script setup lang="ts">
import ComponentVue from '@/models/build-in-components/Component.vue'
import TransitionTransitionGroupVue from '@/models/build-in-components/TransitionTransitionGroup.vue'
import KeepAliveVue from '@/models/build-in-components/KeepAlive.vue'
import SlotVue from '@/models/build-in-components/Slot.vue'
import TeleportVue from '@/models/build-in-components/Teleport.vue'
</script>
<template>
  <section class="toc">
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </section>
  <h1>Build-in components</h1>
  <ComponentVue></ComponentVue>
  <TransitionTransitionGroupVue></TransitionTransitionGroupVue>
  <KeepAliveVue></KeepAliveVue>
  <SlotVue></SlotVue>
  <TeleportVue></TeleportVue>
</template>

<style scoped lang="scss"></style>
