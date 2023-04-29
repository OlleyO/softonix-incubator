import AutoImport from 'unplugin-auto-import/vite'
import type { ConfigEnv } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/* CONFIGURATION FOR SCRIPTS AUTO-IMPORT */
export const ImportsBuilder = (config: ConfigEnv) => AutoImport({
  dts: config.command === 'serve' && './dts/auto-imports.d.ts',

  dirs: [
    './src/composables',
    './src/composables/**/index.ts',
    './src/store/modules',
    './src/services',
    './src/views/**/*.store.ts',
    './src/views/**/*.service.ts'
  ],

  eslintrc: {
    enabled: true
  },

  imports: [
    'vue',
    'vue-router',
    'pinia'
  ],
  resolvers: [ElementPlusResolver()]
})
