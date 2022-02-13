<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  modelValue: string
}
interface IEmits {
  (e: 'update:modelValue', value: string): void
}
const props = withDefaults(defineProps<IProps>(), { modelValue: 's' })
const emit = defineEmits<IEmits>()
const input = (v: any) => emit('update:modelValue', v.target.value)
const value = computed<string>({
  get: () => props.modelValue,
  set: (v: any) => emit('update:modelValue', v)
})
</script>
<template>
  <p>
    <input type="text" :value="props.modelValue" @input="input" />
    <input v-model="value" type="text" />
    <span>v-model custom in child {{ props.modelValue }}</span>
  </p>
</template>

<style scoped lang="scss"></style>
