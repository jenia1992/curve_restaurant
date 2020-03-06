import React from 'react';
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__logo}>Logo</div>
            <ul className={styles.nav__links}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/details/:restaurant_id"}>Details</Link></li>
                <li><Link style={{pointerEvents: "none"}} to={"/dnd"} >About</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;