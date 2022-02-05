import React from "react"
import { Link } from "gatsby"
import * as styles from '../styles/navbar.module.css'


const SetupLinkLighlight = ({path, to, linkName}) => {

    return path === to ? (
        <div className={styles.highlight}>
        <Link to={to}>{linkName}</Link>
        </div>
        ) : (
        <div><Link to={to}>{linkName}</Link></div>
        )
}

const Navbar = ( {path}) => {

    return (
        <nav className={styles.navcontainer} >
        <div className={styles.navbar}>
            <div>
            <p>Hudobný skladateľ</p>
            <h1>Jozef Podprocký</h1>
            </div>
            <div className={styles.links}>
                <SetupLinkLighlight path={path} to='/' linkName='Úvod' />
                <SetupLinkLighlight path={path} to='/cv' linkName='Životopis' />
                <SetupLinkLighlight path={path} to='/works' linkName='Tvorba' />
                <SetupLinkLighlight path={path} to='/listen' linkName='Ukážky' />
                <SetupLinkLighlight path={path} to='/downloads' linkName='Na stiahnutie' />
                <SetupLinkLighlight path={path} to='/contact' linkName='Kontakt' />
            </div>
        </div>
        </nav>
    )
}

export default Navbar