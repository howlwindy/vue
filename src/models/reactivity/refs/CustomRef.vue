<script lang="ts" setup>
import { customRef } from 'vue'
const useDebouncedRef = (value: string) => {
  let timeout: any
  return customRef((track, trigger) => ({
    get() {
      track()
      console.log(value)
      return value
    },
    set(newValue: string) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        value = newValue
        trigger()
      }, 500)
    }
  }))
}
const text = useDebouncedRef('customRef')
</script>
<template>
  <h3><code>customRef</code></h3>
  <input v-model="text" />
  <p>{{ text }}</p>
</template>

<style scoped lang="scss"></style>
