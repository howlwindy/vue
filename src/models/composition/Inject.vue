<script setup lang="ts">
import { inject } from 'vue'
import { reactivedInjectKey } from './Provide.vue'
const reactiveInject = inject(reactivedInjectKey)
</script>
<template>
  <h3><code>Inject</code></h3>
  <pre>inject shallow -> {{ reactiveInject?.shallow }}</pre>
  <pre>inject deep item -> {{ reactiveInject?.deep.item }}</pre>
</template>

<style scoped lang="scss"></style>
