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
import { reactive, readonly, markRaw, isProxy } from 'vue'

const reactiveOrigin = markRaw({
  deep: { item: 0 }
})
// deep reactivity
const reactiveConst = reactive<IReactive>(reactiveOrigin)
// passed by ref
let reactiveConstDeep = reactiveConst.deep

const readonlyOrigin = markRaw({
  deep: { item: 0 }
})
// deep reactivity
const readonlyConst = readonly<IReadonly>(readonlyOrigin)
// passed by ref
let readonlyConstDeep = readonlyConst.deep
</script>
<template>
  <h3><code>markRaw</code></h3>
  <section>
    <pre>isProxy(reactive) -> {{ isProxy(reactiveConst) }}</pre>
    <pre>
      isProxy(reactiveDeep)-> {{ isProxy(reactiveConstDeep) }}
    </pre>
    <pre>isProxy(readonly) -> {{ isProxy(readonlyConst) }}</pre>
    <pre>
      isProxy(readonlyDeep)-> {{ isProxy(readonlyConstDeep) }}
    </pre>
  </section>
</template>

<style scoped lang="scss"></style>
