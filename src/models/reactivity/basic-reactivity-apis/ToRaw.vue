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
import { reactive, readonly, toRaw } from 'vue'

const reactiveOrigin = {
  deep: { item: 0 }
}
// deep reactivity
const reactiveConst = reactive<IReactive>(reactiveOrigin)
// passed by ref
let reactiveConstDeep = reactiveConst.deep

const readonlyOrigin = {
  deep: { item: 0 }
}
// deep reactivity
const readonlyConst = readonly<IReadonly>(readonlyOrigin)
// passed by ref
let readonlyConstDeep = readonlyConst.deep
</script>
<template>
  <h3><code>toRaw</code></h3>
  <section>
    <pre>
toRaw(reactive) === reactiveOrigin -> {{
        toRaw(reactiveConst) === reactiveOrigin
      }}</pre
    >
    <pre>
      toRaw(reactiveDeep) === reactiveOrigin.deep -> {{
        toRaw(reactiveConstDeep) === reactiveOrigin.deep
      }}
    </pre>
    <pre>
toRaw(readonly) === readonlyOrigin -> {{
        toRaw(readonlyConst) === readonlyOrigin
      }}</pre
    >
    <pre>
      toRaw(readonlyDeep) === readonlyOrigin.deep -> {{
        toRaw(readonlyConstDeep) === readonlyOrigin.deep
      }}
    </pre>
  </section>
</template>

<style scoped lang="scss"></style>
