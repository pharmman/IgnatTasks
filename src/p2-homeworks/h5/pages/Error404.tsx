import React from "react";
import classes from './Error404.module.css'
import {NavLink} from 'react-router-dom';

function Error404() {
    return (
        <div className={classes.page}>
            <div className={classes.page__title}>
                <h1 className={'classes.page__title-text'}>Looks like you got lost.</h1>
                <NavLink to={'/pre-junior'}>To home</NavLink>
            </div>
            <div className={classes.page__img}>
                <img src="https://i.gifer.com/7VE.gif" alt=""/>
            </div>
        </div>
    );
}

export default Error404;