<script setup lang="ts">
import ReactiveVue from './Reactive.vue'
import ReadonlyVue from './Readonly.vue'
import IsProxyVue from './IsProxy.vue'
import IsReactiveVue from './IsReactive.vue'
import IsReadonlyVue from './IsReadonly.vue'
import ToRawVue from './ToRaw.vue'
import MarkRawVue from './MarkRaw.vue'
import ShallowReactiveVue from './ShallowReactive.vue'
import ShallowReadonlyVue from './ShallowReadonly.vue'
</script>
<template>
  <h2>base reactivity apis</h2>
  <ReactiveVue></ReactiveVue>
  <ReadonlyVue></ReadonlyVue>
  <IsProxyVue></IsProxyVue>
  <IsReactiveVue></IsReactiveVue>
  <IsReadonlyVue></IsReadonlyVue>
  <ToRawVue></ToRawVue>
  <MarkRawVue></MarkRawVue>
  <ShallowReactiveVue></ShallowReactiveVue>
  <ShallowReadonlyVue></ShallowReadonlyVue>
</template>

<style scoped lang="scss"></style>
