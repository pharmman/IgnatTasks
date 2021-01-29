import React, {CSSProperties, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {requestsAPI} from './dal/RequestsAPI ';

export const Request: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [requestInfo, setRequestInfo] = useState<string>('')

    const responseStyle:CSSProperties = {
        textAlign: 'center',
        fontStyle: 'italic'
    }

    const makeRequest = () => {
        requestsAPI.createSomething(checked)
            .then(res => {
                setRequestInfo(res.data.info)
            })
            .catch(err => {
                console.warn(JSON.stringify(err))
                setRequestInfo(err.response.data.errorText)
            })
    }

    return (
        <div>
            <SuperButton onClick={makeRequest}>Bla</SuperButton>
            <SuperCheckbox checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)}/>
            <h1 style={responseStyle}>{requestInfo}</h1>
        </div>
    )
}