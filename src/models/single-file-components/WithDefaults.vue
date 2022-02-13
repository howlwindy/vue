<script setup lang="ts">
interface IPropsDeep {
  item: string
}
interface IProps {
  shallow: string
  deep?: IPropsDeep
}
const props = withDefaults(defineProps<IProps>(), {
  shallow: 'shallow',
  deep: () => ({
    item: 'deep item'
  })
})
</script>
<template>
  <h3><code>withDefaults</code></h3>
  <pre>props.shallow -> {{ props.shallow }}</pre>
  <pre>props.deep.item -> {{ props.deep.item }}</pre>
</template>

<style scoped lang="scss"></style>
