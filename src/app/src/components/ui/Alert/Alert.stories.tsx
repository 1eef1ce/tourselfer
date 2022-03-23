import React from 'react';
import Alert from './Alert';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
    message: 'Info message',
    title: 'Title alert',
    icon: true
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    message: 'Success message',
    title: 'Title alert',
    icon: true
};

export const Error = Template.bind({});
Error.args = {
    type: 'error',
    message: 'Error message',
    title: 'Title alert',
    icon: true
};

export const NoTitle = Template.bind({});
NoTitle.args = {
    message: 'Info message',
    icon: true
};

export const NoIcon = Template.bind({});
NoIcon.args = {
    title: 'Title alert',
    message: 'Info message',
};