import React from 'react';
import Textarea from './Textarea';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Textarea',
    component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args}/>

export const TextArea = Template.bind({});
TextArea.args = {
    id: "1",
    name: "radio",
    label: "Type some text",
    required: true,
    requiredMessage: "The field can't be empty!"
};