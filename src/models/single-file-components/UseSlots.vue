<script setup lang="ts">
import { ref, toRefs } from 'vue'
interface IRefDeep {
  item: string
}
interface IRef {
  shallow: string
  deep: IRefDeep
}
const refConst = ref<IRef>({
  shallow: 'shallow',
  deep: {
    item: 'deep'
  }
})
interface IPropsDeep {
  item: string
}
interface IProps {
  shallow: string
  deep: IPropsDeep
}
const props = defineProps<IProps>()
const { shallow, deep } = toRefs(props)
import { useSlots } from 'vue'
const slots = useSlots()
</script>
<template>
  <h3><code>useSlots</code></h3>
  <pre>
  <slot name="named"></slot>
  <slot name="namedWithDefault">named slot with default value</slot>
  <slot name="namedScoped" :ownValue="refConst" :propsShallow="shallow" :propsDeep="deep">
    named scoped slot
  </slot>
  </pre>
  <pre>slots = {{ slots }}</pre>
</template>

<style scoped lang="scss"></style>
