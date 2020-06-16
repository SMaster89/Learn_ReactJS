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

    let getRefElement = React.createRef();

    let addText = () => {
        let text = getRefElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messageItem}>
                    {messagesElements}
                </div>
                <div className={s.messageInput}>
                    <textarea ref={getRefElement} cols="20" rows="5"></textarea>
                    <button onClick={ addText} > Add txt </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;