<script lang="ts">
interface IReactiveDeep {
  item: number
}
interface IReactive {
  shallow: number
  deep: IReactiveDeep
}
</script>
<script lang="ts" setup>
import { reactive, ref, toRef, toRefs, isRef } from 'vue'
const reactiveConst = reactive<IReactive>({
  shallow: 0,
  deep: {
    item: 0
  }
})
const refConst = ref<number>(0)
const toRefConst = toRef(reactiveConst, 'shallow')
const toRefsConst = toRefs(reactiveConst)

const isRefConst = isRef(refConst)
const isToRefConst = isRef(toRefConst)
const isToRefsConst = isRef(toRefsConst)
const isToRefsConstShallow = isRef(toRefsConst.shallow)
const isToRefsConstDeep = isRef(toRefsConst.deep)
const isToRefsConstDeepItem = isRef(toRefsConst.deep.value.item)
</script>
<template>
  <h3><code>isRef</code></h3>
  <pre>isRef(refConst) -> {{ isRefConst }}</pre>
  <pre>isRef(toRefConst) -> {{ isToRefConst }}</pre>
  <pre>isRef(toRefsConst) -> {{ isToRefsConst }}</pre>
  <pre>isRef(toRefsConst.shallow) -> {{ isToRefsConstShallow }}</pre>
  <pre>isRef(toRefsConst.deep) -> {{ isToRefsConstDeep }}</pre>
  <pre>isRef(toRefsConst.deep.item) -> {{ isToRefsConstDeepItem }}</pre>
</template>

<style scoped lang="scss"></style>
