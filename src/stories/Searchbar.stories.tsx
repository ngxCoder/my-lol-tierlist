import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from '@components/SearchBar';

export default {
    title: 'Components/Searchbar',
    component: SearchBar,
    argTypes: {},
  } as ComponentMeta<typeof SearchBar>;
  
  const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Base = Template.bind({});
Base.args = {
  regions: [
    {label: 'BR', value: 'br1'},
    {label: 'EUNE', value: 'eun1'},
    {label: 'EUW', value: 'euw1'},
    {label: 'JP', value: 'jp1'},
    {label: 'KR', value: 'kr'},
    {label: 'LAN', value: 'la1'},
    {label: 'LAS', value: 'la2'},
    {label: 'NA', value: 'na1'},
    {label: 'OCE', value: 'oc1'},
    {label: 'TR', value: 'tr1'},
    {label: 'RU', value: 'RU1'},
  ]
}