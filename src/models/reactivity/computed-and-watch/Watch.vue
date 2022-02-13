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
import { reactive, ref, watch } from 'vue'
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
watch(
  () => refConst.value.shallow,
  (value: number, oldValue: number) => {
    refConst.value.deep.item = value ** oldValue
  }
)
watch([reactiveConst, refPrimitive], ([reactiveV, reactiveOv], [refV, refOv]) =>
  console.log(reactiveV.deep.item)
)
</script>
<template>
  <h3><code>watch</code></h3>
  <button @click="reactiveConst.deep.item++">
    reactiveConst.deep.item {{ reactiveConst.deep.item }}
  </button>
  <button @click="refPrimitive++">refPrimitive {{ refPrimitive }}</button>
  <button @click="refConst.shallow++">
    refConst.deep.item {{ refConst.deep.item }}
  </button>
</template>

<style scoped lang="scss"></style>
