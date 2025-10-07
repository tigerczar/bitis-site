import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '../../app/components/ProductCard.vue'

const mockProduct = {
  name: "Giày Bitis Hunter",
  price: 715000,
  images: ["/img/a.jpg", "/img/b.jpg"]
}

describe('ProductCard', () => {
  beforeEach(() => {
    console.log('[ProductCard] ---> START test case')
  })
  afterEach(() => {
    console.log('[ProductCard] ---> Finish test case\n')
  })
  it('Show correct name and price', () => {
    console.log('  --> Check render name and price')
    const wrapper = mount(ProductCard, { props: { product: mockProduct } })
    expect(wrapper.text()).toContain('Giày Bitis Hunter')
    expect(wrapper.text()).toContain('715,000')
    console.log(' ==> Render ok')
  })
  it('Change image product when hover', async () => {
    console.log('  --> Hover card check image')
    const wrapper = mount(ProductCard, { props: { product: mockProduct } })
    await wrapper.trigger('mouseenter')
    const imgs = wrapper.findAll('img')
    expect(imgs[1].classes().join(' ')).toMatch(/opacity|show|block/i)
    console.log('  --> Image hover is correct')
    await wrapper.trigger('mouseleave')
    expect(imgs[0].classes().join(' ')).toMatch(/opacity|show|block/i)
    console.log('  --> Change to main image when mouleave')
  })
})
