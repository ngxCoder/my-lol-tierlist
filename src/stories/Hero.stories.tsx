import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hero } from '@components/Hero';

export default {
    title: 'Home/Hero',
    component: Hero,
    argTypes: {},
  } as ComponentMeta<typeof Hero>;
  
  const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;


export const Base = Template.bind({});
Base.args = {
    title: 'My LoL Tier List'
}
  