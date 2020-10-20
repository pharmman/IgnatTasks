import React, {useState} from 'react';
import classes from './Header.module.css'
import {PathType} from './HW5';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    path: Array<PathType>
}

function Header(props: HeaderPropsType) {
    const [changedClass, setChangedClass] = useState(classes.header)
    setTimeout(() => {
        setChangedClass(classes.header_active)
    }, 3000)

    return (
        <div>
            <header className={changedClass}>
                <div className={classes.header__body}>
                    <a className={classes.header__logo} href={'https://it-incubator.by/'}><img
                        src="https://it-incubator.by/images/tild3364-3938-4962-b634-303637346334__logo-big-blue.png"
                        alt=""/></a>
                    <nav className={classes.header__menu}>
                        <ul className={classes.header__menu_items}>
                            {props.path.map((p, index) => {
                                return <li key={index}>
                                    <NavLink activeClassName={classes.header__link_active} to={p.link}>{p.title}</NavLink>
                                </li>
                            })}
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;
