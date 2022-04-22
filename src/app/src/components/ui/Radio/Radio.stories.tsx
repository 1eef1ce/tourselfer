import React from 'react';
import Radio from './Radio';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Radio',
    component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args}/>

export const RadioButton = Template.bind({});
RadioButton.args = {
    id: "1",
    name: "radio",
    value: "radio",
    label: "Radio Button",
};