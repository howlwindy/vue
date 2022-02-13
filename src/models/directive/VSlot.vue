<script lang="ts" setup>
import { ref } from 'vue'
import VSlotChildVue from './components/VSlotChild.vue'

const refNumber = ref<number>(0)
</script>
<template>
  <h3><code>v-slot</code></h3>
  <button @click="refNumber++">change parent refNumber {{ refNumber }}</button>
  <VSlotChildVue :value="refNumber">
    <template #default><p>slot default</p></template>
    <template #named><p>slot named</p></template>
    <template #namedScope="slotProps">
      <p>slot named scope {{ slotProps }}</p>
    </template>
    <template #[`namedDynamicScope${refNumber}`]="slotProps">
      <p>slot named dynamic scope {{ refNumber }} {{ slotProps }}</p>
    </template>
  </VSlotChildVue>
</template>

<style scoped lang="scss"></style>
