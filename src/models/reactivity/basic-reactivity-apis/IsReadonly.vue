<script lang="ts">
interface IReadonlyDeep {
  item: number
}
interface IReadonly {
  deep: IReadonlyDeep
}
</script>
<script setup lang="ts">
import { readonly, isReadonly } from 'vue'

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
  <h3><code>isReadonly</code></h3>
  <section>
    <pre>isReadonly(readonly) -> {{ isReadonly(readonlyConst) }}</pre>
    <pre>isReadonly(readonlyDeep) -> {{ isReadonly(readonlyConstDeep) }}</pre>
    <pre>
isReadonly(readonlyDeepItem) -> {{ isReadonly(readonlyConstDeepItem) }}</pre
    >
  </section>
</template>

<style scoped lang="scss"></style>
