import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BannerAd from '~/components/BannerAd.vue'

describe('BannerAd.vue', () => {
  it('renders image correctly', () => {
    const wrapper = mount(BannerAd, {
      props: {
        image: '/images/hero-slide-01.jpg',
        alt: 'Test Banner',
        link: 'https://bitis.com.vn'
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/images/hero-slide-01.jpg')
    expect(img.attributes('alt')).toBe('Test Banner')
  })

  it('renders link if provided', () => {
    const wrapper = mount(BannerAd, {
      props: {
        image: '/images/hero-slide-01.jpg',
        link: 'https://bitis.com.vn'
      }
    })
    expect(wrapper.find('a').exists()).toBe(true)
  })
})
