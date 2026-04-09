// @ts-check

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    vite: {
        plugins: [tailwindcss()],
        server: {
            // For dev, ensure cookies work on localhost
            cors: true,
        },
    },
    integrations: [vue()],
    middleware: ['./src/middleware.ts'],
    adapter: node({
        mode: 'standalone',
    }),
})
