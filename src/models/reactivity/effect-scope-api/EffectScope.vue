<script lang="ts">
interface IRefDeep {
  item: number
}
interface IRef {
  shallow: number
  deep: IRefDeep
}
</script>
<script lang="ts" setup>
import { ref, effectScope, watch } from 'vue'
const refConst = ref<IRef>({
  shallow: 0,
  deep: {
    item: 0
  }
})
const scope = effectScope()
scope.run(() => {
  watch(
    () => refConst.value.deep.item,
    () => (refConst.value.deep.item **= 2)
  )
})
scope.stop()
</script>
<template>
  <h3><code>effectScope</code></h3>
  <button @click="refConst.deep.item++">
    refConst.deep.item {{ refConst.deep.item }}
  </button>
</template>

<style scoped lang="scss"></style>
