import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {StoreProviderDecorator} from '../../stories/decorators/ReduxStoreProviderDecorator';
import HW10 from './HW10';

export default {
    title: 'HomeWorks/HW10',
    component: HW10,
    decorators: [StoreProviderDecorator],
} as Meta

const Template: Story = () => <HW10/>

export const HW10Example = Template

