import React from 'react';
import cn from 'classnames';
import Scrollbar from './Scrollbar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Scrollbar',
    component: Scrollbar,
} as ComponentMeta<typeof Scrollbar>;

const Template: ComponentStory<typeof Scrollbar> = (args) => (<Scrollbar {...args}>
    <h1>Scrollable content</h1>
     <div className="f-blocks">
        <div className="item">
            Here are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don&apos;t look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t
            anything embarrassing hidden in the middle of text.                           
        </div>
        <div className="item">
            All the Lorem
            Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful of
            model sentence structures, to generate Lorem Ipsum which looks
            reasonable. The generated Lorem Ipsum is therefore always free from
            repetition, injected humour, or non-characteristic words etc.                               
        </div>
        <div className="item">
            All the Lorem
            Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful of
            model sentence structures, to generate Lorem Ipsum which looks
            reasonable. The generated Lorem Ipsum is therefore always free from
            repetition, injected humour, or non-characteristic words etc.                               
        </div>
    </div>
</Scrollbar>);

export const Vertical = Template.bind({});
Vertical.decorators = [
    (Story) => (
        <div className={'scroll-outer vertical'}>
            <Story/>
        </div>
    ),
];

export const Horizontal = Template.bind({});
Horizontal.decorators = [
    (Story) => (
        <div className={'scroll-outer horizontal'}>
            <Story/>
        </div>
    ),
];
