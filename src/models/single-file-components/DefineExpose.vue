<script lang="ts">
import { Ref } from 'vue'
export interface IDefineExpose {
  shallow: Ref<string>
  deepItem: Ref<string>
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
const refShallow = ref<string>('ref shallow')
const refDeepItem = ref<string>('ref deep item')
defineExpose<IDefineExpose>({
  shallow: refShallow,
  deepItem: refDeepItem
})
const count = ref<number>(0)
const increment = () => {
  count.value++
  refShallow.value += count.value.toString()
  refDeepItem.value += count.value.toString()
}
</script>
<template>
  <h3><code>defineProps</code></h3>
  <button @click="increment">increment</button>
  <slot></slot>
</template>

<style scoped lang="scss"></style>
