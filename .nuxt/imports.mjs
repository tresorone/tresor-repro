export { isVue2, isVue3 } from '#app/app';
export { setNuxtAppInstance, useNuxtApp, defineNuxtPlugin, useRuntimeConfig, useNuxt2Meta } from '#app/nuxt';
export { defineNuxtComponent } from '#app/composables/component';
export { useRoute, useRouter, abortNavigation, addRouteMiddleware, defineNuxtRouteMiddleware, navigateTo } from '#app/composables/router';
export { useState } from '#app/composables/state';
export { useLazyAsyncData, refreshNuxtData } from '#app/composables/asyncData';
export { clearError, createError, isNuxtError, showError, useError, throwError } from '#app/composables/error';
export { useLazyFetch } from '#app/composables/fetch';
export { useCookie } from '#app/composables/cookie';
export { useRequestHeaders, useRequestEvent } from '#app/composables/ssr';
export { useRequestURL } from '#app/composables/url';
export { useAsyncData, useFetch, useHydration } from '#app/mocks';
export { onBeforeRouteLeave, onBeforeRouteUpdate, useLink } from 'vue-router/composables';
export { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, computed, customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, watch, watchEffect, isShallow, effectScope, getCurrentScope, onScopeDispose, defineComponent, defineAsyncComponent, getCurrentInstance, h, inject, nextTick, provide, useAttrs, useCssModule, useCssVars, useSlots } from 'vue';