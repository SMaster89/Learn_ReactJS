import React from "react";
import s from   "./Friends.module.css";
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let friendsItems = props.state.friends.map((f) => <NavLink to={"/friends/" + f.id}><img src={f.src} alt=""/>{f.name}</NavLink>)

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friendsItem}>
                {friendsItems}
            </div>
        </div>
    );
}

export default Friends;