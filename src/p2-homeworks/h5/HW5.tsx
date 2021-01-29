import React from 'react';
import Header from './Header';
import Routes from './Routes';
import {HashRouter} from 'react-router-dom';

export type PathType = {
    link: string
    title: string
}

const path: Array<PathType> = [
    {link: 'pre-junior', title: 'Pre-Junior'},
    {link: 'junior', title: 'Junior'},
    {link: 'junior_plus', title: 'Junior-Plus'},
]

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header path={path}/>

                <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
