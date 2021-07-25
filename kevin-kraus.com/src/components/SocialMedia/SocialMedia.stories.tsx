import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {GitHub} from "@material-ui/icons";
import {SocialMedia} from './SocialMedia';

export default {
    title: 'kevin-kraus.com/SocialMedia',
    component: SocialMedia,
} as ComponentMeta<typeof SocialMedia>;

const Template: ComponentStory<typeof SocialMedia> = (args) => <SocialMedia {...args} />;

export const Github = Template.bind({});
Github.args = {
    link: "https://github.com/kevin-kraus",
    icon: <GitHub/>,
    text: "kevin-kraus"
}