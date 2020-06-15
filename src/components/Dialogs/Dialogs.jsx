import React from "react";
import s from './Dialogs.module.css';
import Message from "./Messages/Messages";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {

    let dialogs = props.dialogs;
    let messages = props.messages;

    let dialogsElements = dialogs.map((d) =>
        <DialogsItem name={d.name} id={d.id} />
    )
    let messagesElements = messages.map((m) =>
        <Message message={m.message} />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;