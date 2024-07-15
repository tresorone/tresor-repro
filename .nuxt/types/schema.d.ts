import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {

  }
  interface RuntimeConfig {
   appEnv: string,

   isLocalEnvironment: boolean,

   _app: {
      basePath: string,

      assetsPath: string,

      cdnURL: any,
   },
  }
  interface PublicRuntimeConfig {
   appEnv: string,

   isLocalEnvironment: boolean,

   _app: {
      basePath: string,

      assetsPath: string,

      cdnURL: any,
   },
  }
}
declare module 'vue/types/vue' {
  interface RuntimeConfig {
   appEnv: string,

   isLocalEnvironment: boolean,

   _app: {
      basePath: string,

      assetsPath: string,

      cdnURL: any,
   },
  }
  interface PublicRuntimeConfig {
   appEnv: string,

   isLocalEnvironment: boolean,

   _app: {
      basePath: string,

      assetsPath: string,

      cdnURL: any,
   },
  }
  interface Vue {
    $config: Omit<RuntimeConfig, 'public'>
  }
}
declare module '@nuxt/bridge-schema' {
  interface NuxtApp {
    $config: RuntimeConfig
  }
  interface NuxtAppCompat {
    $config: RuntimeConfig
  }
  interface NuxtRuntimeConfig extends RuntimeConfig {}
}