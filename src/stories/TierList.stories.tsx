import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChampStatsList } from '@components/TierList';

export default {
    title: 'Components/TierList',
    component: ChampStatsList,
    argTypes: {},
  } as ComponentMeta<typeof ChampStatsList>;
  
  const Template: ComponentStory<typeof ChampStatsList> = (args) => <ChampStatsList {...args} />;


export const Base = Template.bind({});
Base.args = {
  champStats: [
      {
        "champ": "Sion",
        "win": 6,
        "total": 6,
        "percentage": 100
      },
      {
        "champ": "Nocturne",
        "win": 4,
        "total": 4,
        "percentage": 100
      },
      {
        "champ": "Illaoi",
        "win": 2,
        "total": 2,
        "percentage": 100
      },
      {
        "champ": "Jax",
        "win": 2,
        "total": 2,
        "percentage": 100
      },
      {
        "champ": "Kassadin",
        "win": 1,
        "total": 2,
        "percentage": 50
      }
    ]
}
  