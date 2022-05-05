import React from 'react';
import Rating from './Rating';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args}/>

export const Default = Template.bind({});
Default.args = {
    value: 5,
};