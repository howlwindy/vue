<script lang="ts" setup>
import { ref } from 'vue'

const refNumber = ref<number>(0)

const props = withDefaults(defineProps<{ value: number }>(), { value: 0 })
</script>
<template>
  <button @click="refNumber++">change child refNumber {{ refNumber }}</button>
  <slot></slot>
  <slot name="named"></slot>
  <slot name="namedScope" :slotProps="refNumber"></slot>
  <slot :name="`namedDynamicScope${props.value}`" :slotProps="refNumber"></slot>
</template>
<style scoped lang="scss"></style>
