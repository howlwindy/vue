<script setup lang="ts">
import OnBeforeMountVue from './OnBeforeMount.vue'
import OnMountedVue from './OnMounted.vue'
import OnBeforeUpdateVue from './OnBeforeUpdate.vue'
import OnUpdatedVue from './OnUpdated.vue'
import OnBeforeUnmountVue from './OnBeforeUnmount.vue'
import OnUnmountedVue from './OnUnmounted.vue'
import OnErrorCapturedVue from './OnErrorCaptured.vue'
import OnRenderTrackedVue from './OnRenderTracked.vue'
import OnRenderTriggeredVue from './OnRenderTriggered.vue'
import OnActivatedVue from './OnActivated.vue'
import OnDeactivatedVue from './OnDeactivated.vue'
</script>
<template>
  <h2>Lifecycle Hooks</h2>
  <OnBeforeMountVue></OnBeforeMountVue>
  <OnMountedVue></OnMountedVue>
  <OnBeforeUpdateVue></OnBeforeUpdateVue>
  <OnUpdatedVue></OnUpdatedVue>
  <OnBeforeUnmountVue></OnBeforeUnmountVue>
  <OnUnmountedVue></OnUnmountedVue>
  <OnErrorCapturedVue></OnErrorCapturedVue>
  <OnRenderTrackedVue></OnRenderTrackedVue>
  <OnRenderTriggeredVue></OnRenderTriggeredVue>
  <OnActivatedVue></OnActivatedVue>
  <OnDeactivatedVue></OnDeactivatedVue>
</template>

<style scoped lang="scss"></style>
