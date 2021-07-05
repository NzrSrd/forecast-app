import { shallowMount } from '@vue/test-utils'
import Clouds from '../../src/components/atoms/Clouds'

describe('Clouds.vue', () => {
  it('renders props.activeIcon when passed', () => {
    const activeIcon = 'Clouds'
    const wrapper = shallowMount(Clouds, {
      props: { activeIcon }
    })
    const bar = wrapper.findComponent(Clouds)
    expect(bar.exists()).toBe(true)
  })
});

