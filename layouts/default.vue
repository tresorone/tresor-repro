<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  setup() {
    const { $store, $route } = useNuxtApp();
  },
};
</script>
