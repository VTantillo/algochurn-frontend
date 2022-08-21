import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './src/res',
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    checker({ typescript: true }),
  ],
})
