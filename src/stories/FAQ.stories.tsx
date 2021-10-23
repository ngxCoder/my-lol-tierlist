import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FAQ } from '@components/FAQ';


export default {
    title: 'Components/FAQ',
    component: FAQ,
    argTypes: {},
  } as ComponentMeta<typeof FAQ>;

  
  
  const Template: ComponentStory<typeof FAQ> = (args) => (
      <FAQ {...args} />
    );


export const Base = Template.bind({});
Base.args = {
    data: [
        {
          title: 'How it works?',
          content: 'It collects your stats and analyzes it.'
        },
        {
          title: 'Why it has 2 minutes cooldown?',
          content: 'Riot Games  (where I collect your stats) has a solution to protect themselves against the malicious developers called Rate Limit. If I exceed the 100 requests in 2 minutes, I will get a 429 error'
        }
      ]
} 