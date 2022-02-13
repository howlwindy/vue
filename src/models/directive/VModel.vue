<script lang="ts" setup>
import { ref } from 'vue'
import VModelChildVue from './components/VModelChild.vue'

const refInput = ref<string>('')
const refTextarea = ref<string>('')
const refSelect = ref<string>('')
const refCheckbox = ref<Array<string>>([])
const refRadio = ref<string>('')
const refCustom = ref<string>('')
</script>
<template>
  <h3><code>v-model</code></h3>
  <p>
    <input v-model="refInput" type="text" />
    <span class="input">refInput {{ refInput }}</span>
    <br />
    <input v-model.lazy="refInput" type="text" />
    <span class="input">refInput lazy {{ refInput }}</span>
    <br />
    <input v-model.number="refInput" type="text" />
    <span class="input">refInput number {{ refInput }}</span>
    <br />
    <input v-model.trim="refInput" type="text" />
    <span class="input">refInput trim {{ refInput }}</span>
    <br />
  </p>
  <p>
    <input v-model="refTextarea" type="text" />
    <span>refTextarea {{ refTextarea }}</span>
  </p>
  <p>
    <select v-model="refSelect">
      <option value="vue">vue</option>
      <option value="vue-router">vue-router</option>
      <option value="vuex">vuex</option>
    </select>
    <span>refSelect {{ refSelect }}</span>
  </p>
  <p>
    <label>
      vue
      <input
        id="checkbox-vue"
        v-model="refCheckbox"
        type="checkbox"
        value="vue"
      />
    </label>
    <label>
      vue-router
      <input
        id="checkbox-vue-router"
        v-model="refCheckbox"
        type="checkbox"
        value="vue-router"
      />
    </label>
    <label>
      vuex
      <input
        id="checkbox-vuex"
        v-model="refCheckbox"
        type="checkbox"
        value="vuex"
      />
    </label>
    <span>refCheckbox {{ refCheckbox }}</span>
  </p>
  <p>
    <label>
      vue
      <input id="radio-vue" v-model="refRadio" type="radio" value="vue" />
    </label>
    <label>
      vue-router
      <input
        id="radio-vue-router"
        v-model="refRadio"
        type="radio"
        value="vue-router"
      />
    </label>
    <label>
      vuex
      <input id="radio-vuex" v-model="refRadio" type="radio" value="vuex" />
    </label>
    <span>refRadio {{ refRadio }}</span>
  </p>
  <VModelChildVue v-model="refCustom"></VModelChildVue>
  <span>v-model custom in parent {{ refCustom }}</span>
</template>

<style scoped lang="scss">
.input {
  background-color: #999;
}
</style>
