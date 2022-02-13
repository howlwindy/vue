<script lang="ts">
interface IReactiveDeep {
  item: number
}
interface IReactive {
  deep: IReactiveDeep
}
</script>
<script setup lang="ts">
import { reactive, isReactive } from 'vue'

// deep reactivity
const reactiveConst = reactive<IReactive>({
  deep: { item: 0 }
})
// passed by ref
let reactiveConstDeep = reactiveConst.deep
// passed by value
let reactiveConstDeepItem = reactiveConstDeep.item
</script>
<template>
  <h3><code>isReactive</code></h3>
  <section>
    <pre>isReactive(reactive) -> {{ isReactive(reactiveConst) }}</pre>
    <pre>isReactive(reactiveDeep) -> {{ isReactive(reactiveConstDeep) }}</pre>
    <pre>
      isReactive(reactiveDeepItem) -> {{ isReactive(reactiveConstDeepItem) }}
    </pre>
  </section>
</template>

<style scoped lang="scss"></style>
