import React from "react";
import s from './Dialogs.module.css';
import Message from "./Messages/Messages";
import DialogsItem from "./DialogsItem/DialogsItem";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../Redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) =>
        <DialogsItem src={d.src} name={d.name} id={d.id} />
    )
    let messagesElements = props.state.messages.map((m) =>
        <Message message={m.message} />
    )

    // let getRefElement = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateNewMessage = (e) => {
        // let text = getRefElement.current.value;
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
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
                    <textarea onChange={ updateNewMessage } cols="20" rows="5" value={props.state.newMessageText} />
                    <button onClick={ addNewMessage } > Add txt </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;