import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '@components/Header';


export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {},
  } as ComponentMeta<typeof Header>;

  
  
  const Home: ComponentStory<typeof Header> = (args) => (
      <Header {...args} />
    );

 const OutOfHome: ComponentStory<typeof Header> = (args) => (
        <Header {...args} />
    );


export const AtHome = Home.bind({});
AtHome.args = {}
AtHome.parameters = {
    nextRouter: {
        pathname: "/",
    }
}

export const Outside = OutOfHome.bind({});
Outside.args = {}
Outside.parameters = {
    nextRouter: {
        pathname: "/outside",
    }
}
  