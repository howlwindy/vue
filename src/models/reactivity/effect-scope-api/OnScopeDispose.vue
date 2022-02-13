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
import { ref, effectScope, onScopeDispose, watch } from 'vue'
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
onScopeDispose(() => console.log('stopd'))
const scopeDispose = () => {
  scope.stop()
}
</script>
<template>
  <h3><code>onScopeDispose</code></h3>
  <button @click="scopeDispose">
    onScopeDispose refConst.value.shallow will be -1, result is:
    {{ refConst.shallow }}
  </button>
</template>

<style scoped lang="scss"></style>
