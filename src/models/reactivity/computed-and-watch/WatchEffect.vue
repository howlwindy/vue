<script lang="ts">
interface IReactiveDeep {
  item: number
}
interface IReactive {
  shallow: number
  deep: IReactiveDeep
}
interface IRefDeep {
  item: number
}
interface IRef {
  shallow: number
  deep: IRefDeep
}
</script>
<script lang="ts" setup>
import { reactive, ref, watchEffect } from 'vue'

const reactiveConst = reactive<IReactive>({
  shallow: 0,
  deep: {
    item: 0
  }
})
const refPrimitive = ref<number>(0)
const refConst = ref<IRef>({
  shallow: 0,
  deep: {
    item: 0
  }
})
watchEffect(
  () => {
    if (reactiveConst.shallow % 2 === 0) {
      refPrimitive.value++
      refConst.value.shallow--
    }
  },
  { flush: 'sync' }
)
</script>
<template>
  <h3><code>watchEffect</code></h3>
  <button @click="reactiveConst.shallow++">
    reactiveConst.shallow {{ reactiveConst.shallow }}
  </button>
  <button @click="refPrimitive++">refPrimitive {{ refPrimitive }}</button>
  <button @click="refConst.shallow++">
    refConst.shallow {{ refConst.shallow }}
  </button>
</template>

<style scoped lang="scss"></style>
