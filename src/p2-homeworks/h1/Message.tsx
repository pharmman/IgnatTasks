import React from "react";
import {MessageDataType} from "./HW1";
import s from "./Message.module.css"

function Message(props: MessageDataType) {
    return (
        <div>
            <div className={s.message}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt=""/>
                </div>
                <div className={s.message_item}>
                    <p className={s.name}>{props.name}</p>
                    <p className={s.text}>{props.message}</p>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;
