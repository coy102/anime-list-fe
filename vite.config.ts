import replace from '@rollup/plugin-replace'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const pwaOptions: Partial<VitePWAOptions> = {
    base: '/',
    devOptions: {
      enabled: process.env.VITE_SW_DEV === 'true',
      navigateFallback: 'index.html',
      type: 'module',
    },
    manifest: {
      icons: [
        {
          sizes: '192x192',
          src: '/manifest/icon-192x192.png',
          type: 'image/png',
        },
        {
          sizes: '256x256',
          src: '/manifest/icon-256x256.png',
          type: 'image/png',
        },
        {
          sizes: '384x384',
          src: '/manifest/icon-384x384.png',
          type: 'image/png',
        },
        {
          sizes: '512x512',
          src: '/manifest/icon-512x512.png',
          type: 'image/png',
        },
      ],
      name: 'Anime List',
      short_name: 'Anime List',
      theme_color: '#ffffff',
    },
    mode,
  }

  const replaceOptions = { __DATE__: new Date().toISOString() }
  const reload = process.env.VITE_RELOAD_SW === 'true'
  const selfDestroying = process.env.VITE_SW_DESTROY === 'true'

  if (process.env.VITE_SW === 'true') {
    pwaOptions.srcDir = 'src'
    pwaOptions.filename = 'prompt-sw.ts'
    pwaOptions.strategies = 'injectManifest'
  }

  if (reload) {
    // @ts-expect-error just ignore
    replaceOptions.__RELOAD_SW__ = 'true'
  }

  if (selfDestroying) pwaOptions.selfDestroying = selfDestroying

  const env = loadEnv(mode, process.cwd())

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
    return {
      ...prev,
      ['process.env.' + key]: `"${val}"`,
    }
  }, {})

  return defineConfig({
    // @ts-expect-error just ignore
    define: envWithProcessPrefix,
    build: {
      sourcemap: process.env.SOURCE_MAP === 'true',
      minify: 'esbuild',
      rollupOptions: {
        plugins: [
          visualizer({
            emitFile: true,
            filename: 'stats.html',
          }),
        ],
        output: {
          manualChunks(id) {
            const packageName = id.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)?.[1]
            if (packageName) {
              // Customize the chunk name based on your requirements
              return `@npm.${packageName.replace('@', '')}`
            }

            const match = id.match(/src\/pages\/(.*?)\/index\.tsx?$/)
            if (match) {
              const folderName = match[1]
              return `page-${folderName}`
            }
          },
        },
      },
    },
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA(pwaOptions),
      replace({ ...replaceOptions, preventAssignment: true }),
    ],
  })
}
