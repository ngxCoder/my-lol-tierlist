import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '@components/Container';


export default {
    title: 'Components/Container',
    component: Container,
    argTypes: {},
  } as ComponentMeta<typeof Container>;

  
  
  const Template: ComponentStory<typeof Container> = (args) => (
      <Container {...args}>
          <div style={{ width: 300, height: 300, backgroundColor: 'gray' }}>Container</div>
      </Container>
    );


export const Base = Template.bind({});
Base.args = {} 