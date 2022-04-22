import React from 'react';
import Checkbox from './Checkbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args}/>;

export const CheckBox = Template.bind({});
CheckBox.args = {
    id: "1",
    name: "checkbox",
    value: "checkbox",
    label: "Check",
    required: false,
};
