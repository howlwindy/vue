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
import { ref, watchPostEffect } from 'vue'
const refConst = ref<IRef>({
  shallow: 0,
  deep: {
    item: 0
  }
})
watchPostEffect(() => (refConst.value.shallow **= 2))
</script>
<template>
  <h3><code>watchPostEffect</code></h3>
  <button @click="refConst.shallow++">
    refConst.shallow {{ refConst.shallow }}
  </button>
</template>

<style scoped lang="scss"></style>
