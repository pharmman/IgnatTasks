import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react';
import classes from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: any[] = options ? options.map((o, index) => {
        return <option key={index}>{o}</option>
    }) : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }
    return (
        <div className={classes.box}>
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
        </div>
    );
}

export default SuperSelect;
