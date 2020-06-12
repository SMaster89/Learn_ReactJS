import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className="item"><a href="#">Profile</a></li>
                <li className="item"><a href="#">Messages</a></li>
                <li className="item"><a href="#">News</a></li>
                <li className="item"><a href="#">Music</a></li>
                <li className="item"><a href="#">Setting</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
