import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NewsSection from '~/components/NewsSection.vue'

describe('NewsSection', () => {
  it('Show correct heading', () => {
    const wrapper = mount(NewsSection)
    expect(wrapper.text()).toContain('TIN TỨC BITIS')
  })

  it('Show all news item in mock data', () => {
    const wrapper = mount(NewsSection)
     
    const newsCards = wrapper.findAll('.news-card') 
    expect(newsCards.length).toBe(4)
  })

  it('Show correct Title & Summary', () => {
    const wrapper = mount(NewsSection)
     const newsTitles = wrapper.findAll('.news-title')
    const newsSummaries = wrapper.findAll('.news-summary')
    expect(newsTitles[0].text()).toContain('BITIS LÀ ĐẠI DIỆN VIỆT NAM')
    expect(newsSummaries[0].text()).toContain('Dự án kiến tạo') 
  })

 
  it('Show correct image of item', () => {
    const wrapper = mount(NewsSection)
    const images = wrapper.findAll('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    
    expect(images[0].attributes('src')).toContain('article-img-01.jpg')
  })
})
