<script lang="ts">
interface IReactiveDeep {
  item: number
}
interface IReactive {
  deep: IReactiveDeep
}
interface IReadonlyDeep {
  item: number
}
interface IReadonly {
  deep: IReadonlyDeep
}
</script>
<script setup lang="ts">
import { reactive, readonly, isProxy } from 'vue'

// deep reactivity
const reactiveConst = reactive<IReactive>({
  deep: { item: 0 }
})
// passed by ref
let reactiveConstDeep = reactiveConst.deep
// passed by value
let reactiveConstDeepItem = reactiveConstDeep.item
// deep reactivity
const readonlyConst = readonly<IReadonly>({
  deep: { item: 0 }
})
// passed by ref
let readonlyConstDeep = readonlyConst.deep
// passed by value
let readonlyConstDeepItem = readonlyConst.deep.item
</script>
<template>
  <h3><code>isProxy</code></h3>
  <section>
    <pre>isProxy(reactive) -> {{ isProxy(reactiveConst) }}</pre>
    <pre>isProxy(reactiveDeep) -> {{ isProxy(reactiveConstDeep) }}</pre>
    <pre>isProxy(reactiveDeepItem) -> {{ isProxy(reactiveConstDeepItem) }}</pre>
    <pre>isProxy(readonly) -> {{ isProxy(readonlyConst) }}</pre>
    <pre>isProxy(readonlyDeep) -> {{ isProxy(readonlyConstDeep) }}</pre>
    <pre>isProxyereadonlyDeepItem) -> {{ isProxy(readonlyConstDeepItem) }}</pre>
  </section>
</template>

<style scoped lang="scss"></style>
