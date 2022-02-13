<script setup lang="ts">
interface IProps {
  eventValue?: string
}
interface IEmits {
  (e: 'child-event', value: string): void
}
const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()
const input = (v: any) => {
  emit('child-event', v.target.value)
}
</script>
<template>
  <h3><code>defineEmits</code></h3>
  <input type="text" @input="input" />
  <pre>props.eventValue {{ props.eventValue }}</pre>
</template>

<style scoped lang="scss"></style>
