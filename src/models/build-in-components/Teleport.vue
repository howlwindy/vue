<script lang="ts" setup>
import { ref } from 'vue'

const refString = ref<string>('#teleport-wrapper')
const refBoolean = ref<boolean>(true)
</script>
<template>
  <h3><code>teleport</code></h3>
  <button
    @click="refString = Math.random() > 0.5 ? '#teleport-wrapper' : 'body'"
  >
    change refString {{ refString }}
  </button>
  <button @click="refBoolean = !refBoolean">
    change refBoolean {{ refBoolean }}
  </button>
  <div id="teleport-wrapper" style="position: relative;">
    <p>this is teleport default wrapper #teleport-wrapper</p>
  </div>
  <teleport :to="refString" :disabled="refBoolean">
    <p
      style="
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        padding: 1vw;
        background-color: #ff522a;
"
    >
      this is teleport, and current wrapper is {{ refString }}
      {{ `${refBoolean ? 'but status is disabled' : ''}` }}
    </p>
  </teleport>
  <teleport :to="refString" :disabled="refBoolean">
    <p
      style="
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        padding: 1vw;
        background-color: #009fab;
        transform: translate(-5%, 70%);
"
    >
      this is another teleport, and current wrapper is {{ refString }}
      {{ `${refBoolean ? 'but status is disabled' : ''}` }}
    </p>
  </teleport>
</template>

<style scoped lang="scss"></style>
