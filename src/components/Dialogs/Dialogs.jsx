import React from "react";
import s from './Dialogs.module.css';
import Message from "./Messages/Messages";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) =>
        <DialogsItem src={d.src} name={d.name} id={d.id} />
    )
    let messagesElements = props.state.messages.map((m) =>
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