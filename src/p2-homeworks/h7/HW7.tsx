import React, {useState} from 'react';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import {SuperRadio} from './common/c6-SuperRadio/SuperRadio';

const arr = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);
    return (
        <div>
        <hr/>
            homeworks 7

            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
        </div>
    );
}

export default HW7;
