import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import HW12 from './HW12';
import {StoreProviderDecorator} from '../../stories/decorators/ReduxStoreProviderDecorator';

export default {
    title: 'HomeWorks/HW12',
    component: HW12,
    decorators: [StoreProviderDecorator],
    } as Meta

const Template: Story = () => <HW12/>

export const HW12Example = Template

