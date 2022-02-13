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
import { shallowRef, triggerRef } from 'vue'
const shallowRefConst = shallowRef<IRef>({
  shallow: 0,
  deep: {
    item: 0
  }
})
const shallowRefConstUpdate = () => {
  shallowRefConst.value = {
    shallow: shallowRefConst.value.shallow++,
    deep: {
      item: shallowRefConst.value.deep.item++
    }
  }
}
const shallowRefConstUpdateShallow = () => {
  shallowRefConst.value.shallow++
  triggerRef(shallowRefConst)
}
const shallowRefConstUpdateDeepItem = () => {
  shallowRefConst.value.deep.item++
  triggerRef(shallowRefConst)
}
</script>
<template>
  <h3><code>triggerRef</code></h3>
  <button @click="shallowRefConstUpdate">
    shallowRefConst {{ shallowRefConst }}
  </button>
  <button @click="shallowRefConstUpdateShallow">
    shallowRefConst.shallow {{ shallowRefConst.shallow }}
  </button>
  <button @click="shallowRefConstUpdateDeepItem">
    shallowRefConst.deep.item {{ shallowRefConst.deep.item }}
  </button>
</template>

<style scoped lang="scss"></style>
