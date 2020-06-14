import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {
            id: 1,
            name: "Dimych"
        },
        {
            id: 2,
            name: "Andrey"
        },
        {
            id: 3,
            name: "Sveta"
        },
        {
            id: 4,
            name: "Sasha"
        },
        {
            id: 5,
            name: "Viktor"
        },
        {
            id: 6,
            name: "Valera"
        },
    ]

    let messagesData = [
        {
            id: 1,
            message: "Hi"
        },
        {
            id: 2,
            message: "How are you?"
        }
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    );
}

export default Dialogs;