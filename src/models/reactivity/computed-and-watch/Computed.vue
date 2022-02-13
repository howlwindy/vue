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
import { ref, computed } from 'vue'
const refConst = ref<IRef>({
  shallow: 0,
  deep: {
    item: 0
  }
})
const refConstShallowComputed = computed(() => refConst.value.shallow ** 2)
const refConstDeepItemComputed = computed(() => refConst.value.deep.item ** 2)

const refConstShallowComputedAlt = computed({
  get: () => refConst.value.shallow ** 2,
  set: (val) => (refConst.value.shallow = val - 1)
})
const refConstDeepItemComputedAlt = computed({
  get: () => refConst.value.deep.item ** 2,
  set: (val) => (refConst.value.deep.item = val - 1)
})
</script>
<template>
  <h3><code>computed</code></h3>
  <button @click="refConst.shallow++">
    refConstShallowComputed {{ refConstShallowComputed }}
  </button>
  <button @click="refConst.deep.item++">
    refConstDeepItemComputed {{ refConstDeepItemComputed }}
  </button>
  <button @click="refConstShallowComputedAlt = Math.round(Math.random() * 10)">
    refConstShallowComputedAlt {{ refConstShallowComputedAlt }}
  </button>
  <button @click="refConstDeepItemComputedAlt = Math.round(Math.random() * 10)">
    refConstDeepItemComputedAlt {{ refConstDeepItemComputedAlt }}
  </button>
</template>

<style scoped lang="scss"></style>
