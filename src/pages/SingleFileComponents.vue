<script setup lang="ts">
import { ref } from 'vue'
import DefinePropsVue from '@/models/single-file-components/DefineProps.vue'
import DefineEmitsVue from '@/models/single-file-components/DefineEmits.vue'
import DefineExposeVue, {
  IDefineExpose
} from '@/models/single-file-components/DefineExpose.vue'
import UseSlotsVue from '@/models/single-file-components/UseSlots.vue'
import UseAttrsVue from '@/models/single-file-components/UseAttrs.vue'
import WithDefaultsVue from '@/models/single-file-components/WithDefaults.vue'

let eventValue = ref<string>('')
const childEvent = (v: string) => {
  eventValue.value = v
}

const defineExposeVue = ref<IDefineExpose>()
const slotNames: string[] = ['', 'WithDefault', 'Scoped']
</script>
<template>
  <section class="toc">
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </section>
  <h1>Single File Components</h1>
  <DefinePropsVue
    :shallow="'parent shallow'"
    :deep="{ item: 'parent deep item' }"
  ></DefinePropsVue>
  <DefineEmitsVue
    :event-value="eventValue"
    @child-event="childEvent"
  ></DefineEmitsVue>
  <DefineExposeVue ref="defineExposeVue">
    {{ defineExposeVue?.shallow }}
    {{ defineExposeVue?.deepItem }}
  </DefineExposeVue>
  <UseSlotsVue :shallow="'parent shallow'" :deep="{ item: 'parent deep item' }">
    <template #named>named slot without default value and not scoped</template>
    <template #namedWithDefault>
      named slot with default value and not scoped
    </template>
    <!-- <template #namedScoped="props">
      <pre>{{ props.ownValue }}</pre>
      <pre>{{ props.propsShallow }}</pre>
      <pre>{{ props.propsDeep.item }}</pre>
    </template> -->
    <template #namedScoped="{ ownValue, propsShallow, propsDeep }">
      <pre>{{ ownValue }}</pre>
      <pre>{{ propsShallow }}</pre>
      <pre>{{ propsDeep.item }}</pre>
      fuck
    </template>
    <template v-for="(v, k) of slotNames" :key="k" #[`named${v}`]="props">
      <pre v-if="v === ''">named slot without default value and scoped</pre>
      <pre v-if="v === 'WithDefault'">
named slot without default value and scoped</pre
      >
      <pre v-if="v === 'Scoped'">{{ props.ownValue }}</pre>
      <pre v-if="v === 'Scoped'">{{ props.propsShallow }}</pre>
      <pre v-if="v === 'Scoped'">{{ props.propsDeep.item }}</pre>
    </template>
  </UseSlotsVue>
  <UseAttrsVue
    theme="dark"
    title="fuck"
    :shallow="'parent shallow'"
    :deep="{ item: 'parent deep item' }"
  ></UseAttrsVue>
  <WithDefaultsVue
    :shallow="'parent shallow'"
    :deep="{ item: 'parent deep item' }"
  ></WithDefaultsVue>
</template>

<style scoped lang="scss"></style>
