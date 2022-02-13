<script lang="ts" setup>
import { ref } from 'vue'

const refPrimitive = ref<number>(0)
</script>
<template>
  <h3><code>v-show v-if v-else-if v-else</code></h3>
  <p v-show="refPrimitive % 2 === 0">v-show if refPrimitive % 2 === 0</p>
  <p v-if="refPrimitive % 3 === 0">v-if if refPrimitive % 3 === 0</p>
  <p v-else-if="refPrimitive % 5 === 0">v-else-if if refPrimitive % 5 === 0</p>
  <p v-else>v-else if refPrimitive % 3 !== 0 && refPrimitive % 5 !== 0</p>
  <button @click="refPrimitive++">
    change refPrimitive {{ refPrimitive }}
  </button>
</template>

<style scoped lang="scss"></style>
