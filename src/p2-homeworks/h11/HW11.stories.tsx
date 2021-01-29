import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {StoreProviderDecorator} from '../../stories/decorators/ReduxStoreProviderDecorator';
import HW11 from './HW11';

export default {
    title: 'HomeWorks/HW11',
    component: HW11,
    decorators: [StoreProviderDecorator],
} as Meta

const Template: Story = () => <HW11/>

export const HW11Example = Template

