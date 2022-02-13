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
import { ref, unref } from 'vue'
const refConst = ref<IRef>({
  shallow: 0,
  deep: {
    item: 0
  }
})
const unwrapper = unref(refConst) === refConst.value
</script>
<template>
  <h3><code>unref</code></h3>
  <pre>unref(refConst) === refConst.value -> {{ unwrapper }}</pre>
</template>

<style scoped lang="scss"></style>
