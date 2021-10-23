import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainContainer } from '@components/MainContainer';


export default {
    title: 'Components/MainContainer',
    component: MainContainer,
    argTypes: {},
  } as ComponentMeta<typeof MainContainer>;

  
  
  const Template: ComponentStory<typeof MainContainer> = (args) => (
      <MainContainer {...args}>
          <div style={{ width: 300, height: 300, backgroundColor: 'gray' }}>Container 1</div>
          <div style={{ width: 300, height: 300, backgroundColor: 'gray' }}>Container 2</div>
      </MainContainer>
    );


export const Base = Template.bind({});
Base.args = {} 