import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {LanguageMenu} from "./LanguageMenu";

export default {
    title: 'kevin-kraus.com/LanguageMenu',
    component: LanguageMenu,
} as ComponentMeta<typeof LanguageMenu>;

const Template: ComponentStory<typeof LanguageMenu> = (args) => <LanguageMenu/>;

export const Normal = Template.bind({});