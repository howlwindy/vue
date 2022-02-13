<script lang="ts">
interface IReactiveDeep {
  item: number
}
interface IReactive {
  deep: IReactiveDeep
}
</script>
<script setup lang="ts">
import { reactive } from 'vue'

// deep reactivity
const reactiveConst = reactive<IReactive>({
  deep: { item: 0 }
})
// passed by ref
let reactiveConstDeep = reactiveConst.deep
// passed by value
let reactiveConstDeepItem = reactiveConst.deep.item
</script>
<template>
  <h3><code>reactive</code></h3>
  <section>
    <button @click="reactiveConst.deep.item++">
      reactive.deep.item {{ reactiveConst.deep.item }}
    </button>
    <button @click="reactiveConstDeep.item++">
      reactivedeep.item {{ reactiveConstDeep.item }}
    </button>
    <button @click="reactiveConstDeepItem++">
      reactiveDeepItem {{ reactiveConstDeepItem }}
    </button>
  </section>
</template>

<style scoped lang="scss"></style>
