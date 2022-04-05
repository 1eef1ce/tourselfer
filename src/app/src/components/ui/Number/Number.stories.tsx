import React from 'react';
import cn from 'classnames';
import Number from './Number';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Number',
    component: Number,
} as ComponentMeta<typeof Number>;

const Template: ComponentStory<typeof Number> = (args) => <Number {...args} />;

export const PhoneNumber = Template.bind({});

PhoneNumber.decorators = [
    (Story) => (
        <div>
            <Number/>
        </div>
    )
];
