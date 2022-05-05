import React from 'react';
import Button from './Button';
import { Plus, Star } from '@components/icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (<Button {...args}>
    <span>Button</span>
</Button>);

export const Default = Template.bind({});
Default.args = {
    variant: "filled",
    size: "medium",
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: "outlined",
};

export const Large = Template.bind({});
Large.args = {
    variant: "filled",
    size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: "filled",
    size: "medium",
    disabled: true,
};

export const IsIcon = Template.bind({});
IsIcon.args = {
    variant: "filled",
    size: "medium",
    isIcon: true,
    icon: <Plus/>,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
    variant: "filled",
    size: "medium",
    isStartIcon: true,
    startIcon: <Plus/>,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
    variant: "filled",
    size: "medium",
    isEndIcon: true,
    endIcon: <Star/>,
};