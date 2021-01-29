import React, {ChangeEvent} from 'react';
import {Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: number | number[],
    min?:number,
    max?:number,
    step?:number,
    disable?:number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value)
    }

    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Slider value={value} aria-labelledby="range-slider" style={{'width':'200px'}} onChange={onChangeCallback} valueLabelDisplay="auto"/>
        </>
    );
}

export default SuperDoubleRange;
