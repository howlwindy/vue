<script lang="ts" setup>
import { ref } from 'vue'

const refNumber = ref<number>(0)
const refBoolean = ref<boolean>(true)
</script>
<template>
  <h3><code>v-once v-memo</code></h3>
  <button
    @click="
      ;(refNumber = Math.round(Math.random() * 10)),
        (refBoolean = Math.random() > 0.5)
    "
  >
    rerPrimitive {{ refNumber }}
  </button>
  <p>
    <span v-once>v-once {{ refNumber }} {{ refBoolean }}</span>
    <br />
    <span v-memo="[]">v-memo="[]" {{ refNumber }} {{ refBoolean }}</span>
    <br />
    <span v-memo="[refNumber, refBoolean]">
      v-memo="[refNumber]" {{ refNumber }} {{ refBoolean }}
    </span>
  </p>
</template>

<style scoped lang="scss"></style>
