import React from 'react';
import cn from 'classnames';
import Alert from './Alert';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (<Alert {...args}>
    <span className={'alert-title'}>Alert title</span>
    <span className={'alert-msg'}>Alert text</span>
</Alert>);

export const Info = Template.bind({});
Info.args = {
    icon: true
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    icon: true
};

export const Error = Template.bind({});
Error.args = {
    type: 'error',
    icon: true
};

export const NoIcon = Template.bind({});
NoIcon.args = {
    icon: false
};