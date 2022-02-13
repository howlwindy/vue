<script lang="ts" setup>
interface IPropsDeep {
  item: string
}
interface IProps {
  shallow: string
  deep: IPropsDeep
}
const props = defineProps<IProps>()
</script>
<template>
  <h3><code>defineProps</code></h3>
  <pre>props.shallow -> {{ props.shallow }}</pre>
  <pre>props.deep.item -> {{ props.deep.item }}</pre>
</template>

<style scoped lang="scss"></style>
