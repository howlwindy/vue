<script lang="ts" setup>
import { ref } from 'vue'

const refPrimitive = ref<number>(0)
</script>
<template>
  <h3><code>v-text</code></h3>
  <p>interpolation {{ refPrimitive }}</p>
  <p v-text="`v-text ${refPrimitive}`" />
  <button @click="refPrimitive++">change refPrimitive</button>
</template>

<style scoped lang="scss"></style>
