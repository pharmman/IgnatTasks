import React from 'react';
import s from './App.module.css';
import {HW13} from '../../../p2-homeworks/h13/HW13';
import HW12 from '../../../p2-homeworks/h12/HW12';
import HW10 from '../../../p2-homeworks/h10/HW10';
import HW11 from '../../../p2-homeworks/h11/HW11';

function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            {/*<HW5/>*/}
            {/*<HW6/>*/}
            {/*<HW7/>*/}
            {/*<HW8/>*/}
            {/*<HW9/>*/}
            <HW10/>
            <HW11/>
            <HW12/>
            <HW13/>
        </div>
    );
}

export default App;
