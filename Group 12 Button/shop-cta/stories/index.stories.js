import { html } from 'lit';
import '../shop-cta.js';

export default {
  title: 'ShopCta',
  component: 'shop-cta',
  argTypes: {
    title: { control: 'text' },
    isDisabled: { control: 'boolean' },
    icon: { control: 'text' },
    iconEnable: { control: 'boolean' },
  },
};

function Template({ title = 'Hello world', isDisabled = false, icon='shopping-cart', iconEnable = true, slot }) {
  return html`
    <shop-cta
      .title=${title}
      .isDisabled=${isDisabled}
      .iconEnable=${iconEnable}
      .icon=${icon}
    >
      ${slot}
    </shop-cta>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
