import { shallowMount } from '@vue/test-utils';
import ApiAuthorizationWizard from "Components/wizard/api-authorization-wizard/api-authorization-wizard.vue";

test('ApiAuthorizationWizard => should render an input for model', () => {
    const wrapper = shallowMount(ApiAuthorizationWizard, {
    })
    expect(wrapper.find('input')).toMatch("test")
}) 