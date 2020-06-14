import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.activeLink}>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.activeLink}>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.activeLink}>Sveta</NavLink>                 </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={s.activeLink}>Sasha</NavLink>                 </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={s.activeLink}>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6" activeClassName={s.activeLink}>Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>It is Kamasutra</div>
            </div>
        </div>
    );
}

export default Dialogs;