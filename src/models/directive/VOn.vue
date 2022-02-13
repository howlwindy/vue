<script lang="ts" setup>
import { ref } from 'vue'

const refPrimitive = ref<number>(0)
const evtDynamic: string[] = ['click', 'dblclick']
const evt = ref<string>(evtDynamic[0])
</script>
<template>
  <h3><code>v-on</code></h3>
  <p>
    <button @click="refPrimitive++">v-on {{ refPrimitive }}</button>
    <br />
    <button @click.stop="refPrimitive++">v-on stop {{ refPrimitive }}</button>
    <br />
    <button @click.prevent="refPrimitive++">
      v-on prevent {{ refPrimitive }}
    </button>
    <br />
    <button @click.capture="refPrimitive++">
      v-on capture {{ refPrimitive }}
    </button>
    <br />
    <button @click.meta="refPrimitive++">v-on meta {{ refPrimitive }}</button>
    <br />
    <button @click.once="refPrimitive++">v-on once {{ refPrimitive }}</button>
    <br />
    <button @click.left="refPrimitive++">v-on left {{ refPrimitive }}</button>
    <br />
    <button @click.middle="refPrimitive++">
      v-on middle {{ refPrimitive }}
    </button>
    <br />
    <button @click.right.prevent="refPrimitive++">
      v-on right {{ refPrimitive }}
    </button>
    <br />
    <button @click.passive="refPrimitive++">
      v-on passive {{ refPrimitive }}
    </button>
    <br />
    <button
      @[evt]="
        ;(evt = evtDynamic[Math.floor(Math.random() * evtDynamic.length)]),
          refPrimitive++
      "
    >
      v-on dynamic {{ evt }} {{ refPrimitive }}
    </button>
  </p>
</template>

<style scoped lang="scss"></style>
