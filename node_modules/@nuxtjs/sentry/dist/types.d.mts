
import type { ModuleOptions, ModulePublicRuntimeConfig } from './module.js'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['sentry']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['sentry']?: ModuleOptions }
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['sentry']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['sentry']?: ModuleOptions }
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}


export type { ModuleOptions, ModulePublicRuntimeConfig, default } from './module.js'
