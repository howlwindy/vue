<script lang="ts" setup>
import { ref } from 'vue'

const refPrimitive = ref<number>(0)
const refClass = ref<number>(0)
const refStyle = ref<number>(0)
const refDynamic = ref<number>(0)
const attrDynamic = ref<string>('data-')
</script>
<template>
  <h3><code>v-bind</code></h3>
  <p>
    <button
      :class="[refClass > 0.5 ? 'refClassActive' : 'refClassInactive']"
      @click="refClass = Math.random()"
    >
      v-bind class {{ refClass > 0.5 ? 'refClassActive' : 'refClassInactive' }}
    </button>
  </p>
  <p>
    <button
      :style="{ border: `1px solid #${refStyle > 0.5 ? 'ff522a' : '767676'}` }"
      @click="refStyle = Math.random()"
    >
      v-bind class
      {{ `border: 1px solid #${refStyle > 0.5 ? 'ff522a' : '767676'}` }}
    </button>
  </p>
  <p>
    <button
      :[attrDynamic]="refDynamic"
      @click="attrDynamic = `${attrDynamic.split('-')[0]}-${refDynamic++}`"
    >
      dynamic attr {{ attrDynamic }}
    </button>
  </p>
  <p>
    <button @click="refPrimitive++">v-bind .camel {{ refPrimitive }}</button>
    <input :value.camel="refPrimitive" />
  </p>
  <p>
    <button @click="refPrimitive++">v-bind .camel {{ refPrimitive }}</button>
    <input :value.prop="refPrimitive" />
  </p>
  <p>
    <button @click="refPrimitive++">v-bind .camel {{ refPrimitive }}</button>
    <input :value.attr="refPrimitive" />
  </p>
</template>

<style scoped lang="scss">
.refClassActive {
  border: 1px solid #767676;
}

.refClassInactive {
  border: 1px solid #ff522a;
}
</style>
