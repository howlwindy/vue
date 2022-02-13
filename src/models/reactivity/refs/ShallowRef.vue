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
import { shallowRef } from 'vue'
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
</script>
<template>
  <h3><code>shallowRef</code></h3>
  <button @click="shallowRefConstUpdate">
    shallowRefConst {{ shallowRefConst }}
  </button>
  <button @click="shallowRefConst.shallow++">
    shallowRefConst.shallow {{ shallowRefConst.shallow }}
  </button>
  <button @click="shallowRefConst.deep.item++">
    shallowRefConst.deep.item {{ shallowRefConst.deep.item }}
  </button>
</template>

<style scoped lang="scss"></style>
