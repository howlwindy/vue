<script lang="ts" setup>
import { ref } from 'vue'

const refPrimitive = ref<number>(0)
</script>
<template>
  <h3><code>v-pre</code></h3>
  <p v-pre>{{ refPrimitive }}</p>
  <button @click="refPrimitive++">
    change refPrimitive {{ refPrimitive }}
  </button>
</template>

<style scoped lang="scss"></style>
