<script lang="ts">
interface IReactiveDeep {
  item: number
}
interface IReactive {
  shallow: number
  deep: IReactiveDeep
}
</script>
<script setup lang="ts">
import { shallowReactive } from 'vue'

// deep reactivity
const shallowReactiveConst = shallowReactive<IReactive>({
  shallow: 0,
  deep: { item: 0 }
})
// passed by ref
let shallowReactiveConstDeep = shallowReactiveConst.deep
</script>
<template>
  <h3><code>shallowReactive</code></h3>
  <section>
    <button @click="shallowReactiveConst.shallow++">
      shallowReactiveShallow {{ shallowReactiveConst.shallow }}
    </button>
    <button @click="shallowReactiveConst.deep.item++">
      shallowReactive.deep.item {{ shallowReactiveConst.deep.item }}
    </button>
    <button @click="shallowReactiveConstDeep.item++">
      shallowReactivedeep.item {{ shallowReactiveConstDeep.item }}
    </button>
  </section>
</template>

<style scoped lang="scss"></style>
