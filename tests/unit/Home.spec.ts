import { mount } from '@vue/test-utils'
import Home from '../../src/pages/Home.vue'

describe('Home.vue', () => {
  it('renders', () => {
    const wrapper = mount(Home)
    expect(wrapper.html()).toContain('Harder Better Faster Stronger - Vue')
  })
})

test('Home.vue', async () => {
  const wrapper = mount(Home)
  expect(wrapper.html()).toContain('click 0 times already.')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('click 1 times already.')
})
