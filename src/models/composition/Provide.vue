<script lang="ts">
interface IReactiveDeep {
  item: number
}
interface IReactive {
  shallow: number
  deep: IReactiveDeep
}
export const reactivedInjectKey: InjectionKey<IReactive> = Symbol()
</script>
<script setup lang="ts">
import InjectVue from './Inject.vue'
import { InjectionKey, provide, reactive } from 'vue'

const reactiveConst = reactive<IReactive>({
  shallow: 0,
  deep: {
    item: 0
  }
})
provide(reactivedInjectKey, reactiveConst)
</script>
<template>
  <h3><code>provide</code></h3>
  <button @click="reactiveConst.shallow++">
    provide shallow -> {{ reactiveConst.shallow }}
  </button>
  <button @click="reactiveConst.deep.item++">
    provide deepItem -> {{ reactiveConst.deep.item }}
  </button>
  <InjectVue></InjectVue>
</template>

<style scoped lang="scss"></style>
