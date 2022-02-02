import React from "react"
import { Link } from "gatsby"
import * as styles from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navcontainer} >
        <div className={styles.navbar}>
            <h1>Jozef Podprocký</h1>
            <div className={styles.links}>
                <Link to='/'>Úvod</Link>
                <Link to='/music'>Ukážky</Link>
                <Link to='/works'>Tvorba</Link>
                <Link to='/cv'>Životopis</Link>
                <Link to='/downloads'>Na stiahnutie</Link>
                <Link to='/contact'>Kontakt</Link>
            </div>
        </div>
        </nav>
    )
}