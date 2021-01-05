import React from 'react';
import {Provider} from 'react-redux';
import store from '../../p2-homeworks/h10/bll/store';


export const StoreProviderDecorator = (storyFn :any) => (
    <Provider store={store}>{storyFn()}</Provider>
)