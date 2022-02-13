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
import { reactive, toRefs } from 'vue'
const reactiveConst = reactive<IReactive>({
  shallow: 0,
  deep: {
    item: 0
  }
})
const { shallow: toRefShallow, deep: toRefDeep } = toRefs(reactiveConst)
const toRefsConst = toRefs(reactiveConst)
const toRefsConstDeep = toRefs(reactiveConst.deep)
</script>
<template>
  <h3><code>toRefs</code></h3>
  <button @click="toRefShallow++">toRefShallow {{ toRefShallow }}</button>
  <button @click="reactiveConst.shallow++">
    reactiveConst.shallow {{ reactiveConst.shallow }}
  </button>
  <button @click="toRefsConst.shallow.value++">
    toRefsConst.shallow.value {{ toRefsConst.shallow }}
  </button>
  <button @click="toRefDeep.item++">toRefDeep.item {{ toRefDeep.item }}</button>
  <button @click="reactiveConst.deep.item++">
    reactiveConst.deep.item {{ reactiveConst.deep.item }}
  </button>
  <button @click="toRefsConstDeep.item.value++">
    toRefsConstDeep.item.value {{ toRefsConstDeep.item }}
  </button>
</template>

<style scoped lang="scss"></style>
