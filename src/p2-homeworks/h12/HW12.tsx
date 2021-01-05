import React from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC, ThemeType} from './bll/themeReducer';
import {SuperRadio} from '../h7/common/c6-SuperRadio/SuperRadio';

const themes = ['dark', 'red', 'some', 'pink', 'yellow'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme) // useSelector
    const dispatch = useDispatch()

    const onChangeHandler = (theme:ThemeType) => dispatch(changeThemeC(theme))


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperRadio value={theme} options={themes} onChangeOption={onChangeHandler}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
