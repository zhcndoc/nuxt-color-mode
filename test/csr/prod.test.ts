import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'
import { describe, it, expect } from 'vitest'

const fixture = fileURLToPath(new URL('../../playground', import.meta.url))

describe('ssr: false, target: server, prod mode', async () => {
  await setup({
    server: true,
    build: true,
    fixture,
    nuxtConfig: { ssr: false },
  })

  it('render', async () => {
    const html = await $fetch('/')
    expect(html).toContain('getStorageValue(\'localStorage\', \'nuxt-color-mode\')')
  })
})
