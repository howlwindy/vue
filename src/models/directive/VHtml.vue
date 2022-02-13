<script lang="ts" setup>
import { ref } from 'vue'

const refPrimitive = ref<string>(`<p style="color: #ff522a">v-html</p>`)
</script>
<template>
  <h3><code>v-html</code></h3>
  <div v-html="refPrimitive"></div>
</template>

<style scoped lang="scss"></style>
