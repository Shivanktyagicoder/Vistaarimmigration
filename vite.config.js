import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Increase chunk warning threshold (framer-motion is large by design)
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Manual chunk splitting: separates heavy vendor libs into their own cached bundles.
        // Result: user only re-downloads what actually changed between deploys.
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (id.includes('framer-motion'))   return 'framer-motion'
          if (id.includes('react-dom'))        return 'react-dom'
          if (id.includes('react-router'))     return 'router'
          if (id.includes('lucide-react'))     return 'icons'
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) return 'forms'
          if (id.includes('react-helmet'))     return 'helmet'
          // All other node_modules in one vendor chunk
          return 'vendor'
        },
      },
    },
  },
})
