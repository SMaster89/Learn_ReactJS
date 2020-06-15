import React from "react";
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}><img src={props.src} alt="avatar"/>{props.name}</NavLink>
        </div>
    );
}

export default DialogsItem;