import { defineNuxtConfig } from "@nuxt/bridge";
import { join } from "path";

export default defineNuxtConfig({
  /*
   ** Headers of the page
   */
  bridge: {
    capi: true,
    nitro: false,
  },
  ssr: true,
  modern: process.env.NODE_ENV === "production" ? "client" : false,
  telemetry: false,
  components: [
    {
      path: "~/components",
      extensions: ["vue"],
      pathPrefix: false, // do not use folder path as prefix
    },
  ],
  head: {
    htmlAttrs: {
      lang: "de",
    },
    bodyAttrs: {
      tabindex: 1,
    },
  },
  loading: false,
  build: {
    corejs: "3",
    extractCSS: process.env.NODE_ENV === "production",
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-custom-properties": false,

          tailwindcss: {},
          autoprefixer: {},
        },
      },
      preset: {
        features: {
          "custom-properties": false,
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      // fixes multiple instances of the same module
      config.resolve.alias["bn.js"] = join(
        __dirname,
        "node_modules/bn.js/lib/bn.js"
      );
      config.devtool = "source-map";
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
      config.node = {
        fs: "empty",
      };
    },
  },
  publicRuntimeConfig: {
    appEnv: process.env.VUE_APP_ENV,
    isLocalEnvironment: process.env.VUE_APP_ENV == "dev",
  },
});
