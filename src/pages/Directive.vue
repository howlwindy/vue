<script setup lang="ts">
import VTextVue from '@/models/directive/VText.vue'
import VHtmlVue from '@/models/directive/VHtml.vue'
import VShowVIfVElseVElseIfVElseVue from '@/models/directive/VShowVIfVElseVElseIfVElse.vue'
import VForVue from '@/models/directive/VFor.vue'
import VOnVue from '@/models/directive/VOn.vue'
import VBindVue from '@/models/directive/VBind.vue'
import VModelVue from '@/models/directive/VModel.vue'
import VSlotVue from '@/models/directive/VSlot.vue'
import VOnceVMemoVue from '@/models/directive/VOnceVMemo.vue'
import VPreVue from '@/models/directive/VPre.vue'
import VCloakVue from '@/models/directive/VCloak.vue'
import VCustomVue from '@/models/directive/VCustom.vue'
</script>
<template>
  <section class="toc">
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </section>
  <h1>Directive</h1>
  <VTextVue></VTextVue>
  <VHtmlVue></VHtmlVue>
  <VShowVIfVElseVElseIfVElseVue></VShowVIfVElseVElseIfVElseVue>
  <VForVue></VForVue>
  <VOnVue></VOnVue>
  <VBindVue></VBindVue>
  <VModelVue></VModelVue>
  <VSlotVue></VSlotVue>
  <VOnceVMemoVue></VOnceVMemoVue>
  <VPreVue></VPreVue>
  <VCloakVue></VCloakVue>
  <VCustomVue></VCustomVue>
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>
