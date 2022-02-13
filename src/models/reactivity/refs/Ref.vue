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
import { ref } from 'vue'

const refPrimitive = ref<number>(0)

const refConst = ref<IRef>({
  shallow: 0,
  deep: {
    item: 0
  }
})
const refConstDeep = refConst.value.deep
</script>
<template>
  <h3><code>ref</code></h3>
  <button @click="refPrimitive++">refPrimitive {{ refPrimitive }}</button>
  <button @click="refConst.shallow++">
    refConst.shallow {{ refConst.shallow }}
  </button>
  <button @click="refConst.deep.item++">
    refConst.deep.item {{ refConst.deep.item }}
  </button>
  <button @click="refConstDeep.item++">
    refConstdeep.item {{ refConstDeep.item }}
  </button>
</template>

<style scoped lang="scss"></style>
