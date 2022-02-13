import { RouteRecordRaw } from 'vue-router'

export const routes = (): RouteRecordRaw[] => {
  return [
    { path: '/', name: 'Home', component: () => import('../pages/Home.vue') },
    {
      path: '/build-in-components',
      name: 'BuildInComponents',
      component: () => import('../pages/BuildInComponents.vue')
    },
    {
      path: '/directive',
      name: 'Directive',
      component: () => import('../pages/Directive.vue')
    },
    {
      path: '/reactivity',
      name: 'Reactivity',
      component: () => import('../pages/Reactivity.vue'),
      children: [
        {
          path: 'base-reactivity-apis',
          name: 'BaseReactivityApis',
          component: () =>
            import(
              '../models/reactivity/basic-reactivity-apis/BaseReactivityApis.vue'
            )
        },
        {
          path: 'refs',
          name: 'Refs',
          component: () => import('../models/reactivity/refs/Refs.vue')
        },
        {
          path: 'computed-and-watch',
          name: 'ComputedAndWatch',
          component: () =>
            import(
              '../models/reactivity/computed-and-watch/ComputedAndWatch.vue'
            )
        },
        {
          path: 'effect-scope',
          name: 'EffectScope',
          component: () =>
            import('../models/reactivity/effect-scope-api/EffectScopeApi.vue')
        }
      ]
    },
    {
      path: '/composition',
      name: 'CompositionApi',
      component: () => import('../pages/Composition.vue'),
      children: [
        {
          path: 'lifecycle-hooks',
          name: 'LifecycleHooks',
          component: () =>
            import('../models/composition/lifecycle-hooks/LifecycleHooks.vue')
        }
      ]
    },
    {
      path: '/single-file-components',
      name: 'SingleFileComponents',
      component: () => import('../pages/SingleFileComponents.vue')
    }
  ]
}
