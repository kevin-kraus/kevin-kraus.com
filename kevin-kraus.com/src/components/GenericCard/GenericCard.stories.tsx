import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {GenericCard} from "./GenericCard";
import kkraus from "../../assets/kkraus/wave_memoji.png"

export default {
    title: 'kevin-kraus.com/GenericCard',
    component: GenericCard,
} as ComponentMeta<typeof GenericCard>;

const Template: ComponentStory<typeof GenericCard> = (args) => <GenericCard {...args}/>;
export const Normal = Template.bind({});
Normal.args = {
    title: "Hi!",
    text: "Ich bin Kevin und freue dich mich auf meiner Website zu begrüßen!\n\nDu möchtest bestimmt wissen, ...",
    image: kkraus
}