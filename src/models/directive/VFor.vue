<script lang="ts">
interface IColor {
  r: number
  g: number
  b: number
  a: number
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'

const refNumber = ref<number>(0)
const refString = ref<string>('vue')
const refArray = ref<Array<number>>([])
const refObject = ref<IColor>({
  r: 0,
  g: 0,
  b: 0,
  a: 0
})
const refSet = ref<Set<number>>(new Set())
const refMap = ref<Map<string, number>>(new Map())
</script>
<template>
  <h3><code>v-for</code></h3>
  <p>
    <button @click="refNumber++">change refNumber {{ refNumber }}</button>
    <span v-for="(v, k) of refNumber" :key="`${v}${k}`">
      {{ v }} {{ '/ ' }}
    </span>
  </p>
  <p>
    <button
      @click="
        refString = ['vue', 'vue-router', 'vuex'][Math.floor(Math.random() * 3)]
      "
    >
      change refString {{ refString }}
    </button>
    <span v-for="(v, k) of refString" :key="`${v}${k}`">
      {{ v }} {{ '/ ' }}
    </span>
  </p>
  <p>
    <button @click="refArray.push(Math.round(Math.random() * 255))">
      change refArray {{ refArray }}
    </button>
    <span v-for="(v, k) of refArray" :key="`${v}${k}`">{{ v }} {{ '/ ' }}</span>
  </p>
  <p>
    <button
      @click="
        refObject = {
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
          a: +Math.random().toFixed(1)
        }
      "
    >
      change refObject {{ refObject }}
    </button>
    <span
      v-for="(v, k, i) of refObject"
      :key="`${k}${i}`"
      :style="{
        color: `rgba(${refObject.r}, ${refObject.g}, ${refObject.b}, ${refObject.a})`
      }"
    >
      {{ v }} {{ '/ ' }}
    </span>
  </p>
  <p>
    <button @click="refSet.add(Math.round(Math.random() * 255))">
      change refSet {{ refSet }}
    </button>
    <span v-for="(v, k) of refSet" :key="`${v}${k}`">{{ v }} {{ '/ ' }}</span>
  </p>
  <p>
    <button @click="refMap.set('ran', Math.round(Math.random() * 255))">
      change refMap {{ refMap }}
    </button>
    <span v-for="(v, k) of refMap" :key="`${v}${k}`">{{ v }} {{ '/ ' }}</span>
  </p>
</template>

<style scoped lang="scss"></style>
