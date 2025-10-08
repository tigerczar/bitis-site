import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

vi.mock('~/utils/logger', () => ({
  Logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn(), debug: vi.fn() }
}))
import Header from '~/components/Header.vue'

const stubs = {
  NuxtLink: { name: 'NuxtLink', props: ['to'], template: '<a :href="to"><slot /></a>' },
  transition: false as any,
}

describe('Header', () => {

  it('Search input placeholder on mobile and desktop', async () => {
    const wrapper = mount(Header, { global: { stubs } })
    await nextTick()
    const inputs = wrapper.findAll('input[placeholder="Bạn cần tìm gì..."]')
    expect(inputs.length).toBeGreaterThanOrEqual(1)
  })

  it('Menu have multi-language (Vietnamese and English)', async () => {
    const wrapper = mount(Header, { global: { stubs } })
    await nextTick()
    const select = wrapper.find('select')
    expect(select.exists()).toBe(true)
    const options = select.findAll('option').map(o => o.element.value)
    expect(options).toContain('vn')
    expect(options).toContain('en')
  })

  it('Have hotline and find the store on topbar', async () => {
    const wrapper = mount(Header, { global: { stubs } })
    await nextTick()
    expect(wrapper.text()).toContain('Hotline')
    expect(wrapper.text().toLowerCase()).toContain('tìm cửa hàng')
  })
})
