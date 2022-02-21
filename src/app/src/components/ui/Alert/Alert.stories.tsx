import React from 'react';
import cn from 'classnames';
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
};