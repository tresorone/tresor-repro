import type { Nuxt2Context } from '@nuxt/bridge-schema'
import type { ComponentOptions } from 'vue'
export type MiddlewareKey = string
declare module 'vue/types/options' {
  export type Middleware = MiddlewareKey | ((ctx: Nuxt2Context, cb: Function) => Promise<void> | void)
  interface ComponentOptions<V extends Vue> {
    middleware?: Middleware | Middleware[]
  }
}