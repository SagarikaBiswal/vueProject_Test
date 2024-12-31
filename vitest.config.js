import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      coverage: {
        provider: 'istanbul',
        reporteer: ["text", "json"],
        outputFile: {
          json: './XYZ-output.json'
        }
        // include: ['src/tests/**.*.js',
        // // 'src/components/HelloWorld.vue'
        // ],
      },
      // include: ['src/tests/**.ts',
      //   // 'src/components/HelloWorld.vue'
      //   ],
      // exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
