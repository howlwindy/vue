<script lang="ts" setup>
import { useAttrs } from 'vue'
interface IPropsDeep {
  item: string
}
interface IProps {
  shallow: string
  deep: IPropsDeep
}
defineProps<IProps>()
const attrs = useAttrs()
</script>
<template>
  <h3><code>useAttrs</code></h3>
  <pre>attrs = {{ attrs }}</pre>
</template>

<style scoped lang="scss"></style>
