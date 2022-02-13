<script lang="ts">
interface IReadonlyDeep {
  item: number
}
interface IReadonly {
  shallow: number
  deep: IReadonlyDeep
}
</script>
<script setup lang="ts">
import { shallowReadonly } from 'vue'

// deep reactivity
const shallowReadonlyConst = shallowReadonly<IReadonly>({
  shallow: 0,
  deep: { item: 0 }
})
// passed by ref
let shallowReadonlyConstDeep = shallowReadonlyConst.deep
</script>
<template>
  <h3><code>shallowReadonly</code></h3>
  <section>
    <pre>
      shallowReadonlyShallow {{ shallowReadonlyConst.shallow }}
    </pre>
    <button @click="shallowReadonlyConst.deep.item++">
      shallowReadonly.deep.item {{ shallowReadonlyConst.deep.item }}
    </button>
    <button @click="shallowReadonlyConstDeep.item++">
      shallowReadonlydeep.item {{ shallowReadonlyConstDeep.item }}
    </button>
  </section>
</template>

<style scoped lang="scss"></style>
