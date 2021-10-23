import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout } from '@layouts/MainLayout';


export default {
    title: 'Layouts/MainLayout',
    component: MainLayout,
    argTypes: {},
  } as ComponentMeta<typeof MainLayout>;

  
  
  const Template: ComponentStory<typeof MainLayout> = (args) => (
      <MainLayout {...args}>
          <div style={{ width: 300, height: 300, backgroundColor: 'gray' }}>Container</div>
      </MainLayout>
    );


export const Base = Template.bind({});
Base.args = {}