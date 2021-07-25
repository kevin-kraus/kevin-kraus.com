import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {HeaderBar} from "./HeaderBar";

export default {
    title: 'kevin-kraus.com/HeaderBar',
    component: HeaderBar,
} as ComponentMeta<typeof HeaderBar>;

const Template: ComponentStory<typeof HeaderBar> = (args) => <HeaderBar/>;

export const Normal = Template.bind({});