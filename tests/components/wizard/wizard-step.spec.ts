import { shallowMount } from '@vue/test-utils'
import WizardStep from "Components/wizard/wizard-step/wizard-step.vue";

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(WizardStep, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})