<script lang="ts">
interface IReactiveDeep {
  item: number
}
interface IReactive {
  shallow: number
  deep: IReactiveDeep
}
</script>
<script lang="ts" setup>
import { reactive, toRef } from 'vue'
const reactiveConst = reactive<IReactive>({
  shallow: 0,
  deep: {
    item: 0
  }
})
const toRefShallow = toRef(reactiveConst, 'shallow')
const toRefDeep = toRef(reactiveConst.deep, 'item')
</script>
<template>
  <h3><code>toRef</code></h3>
  <button @click="reactiveConst.shallow++">
    reactiveConst.shallow {{ reactiveConst.shallow }}
  </button>
  <button @click="toRefShallow++">toRefShallow {{ toRefShallow }}</button>
  <button @click="reactiveConst.deep.item++">
    reactiveConst.deep.item {{ reactiveConst.deep.item }}
  </button>
  <button @click="toRefDeep++">toRefDeep {{ toRefDeep }}</button>
</template>

<style scoped lang="scss"></style>
