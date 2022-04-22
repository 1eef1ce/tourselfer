import React from 'react';
import Loader from './Loader';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args}/>

export const CustomLoader = Template.bind({});
CustomLoader.decorators = [
    (Story) => (
        <div className={'loader-example'}>
            <Story/>
        </div>
    ),
];