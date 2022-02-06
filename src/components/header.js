import React from "react"
import { Link } from "gatsby"
import * as styles from  './header.module.css'


const SetupLinkLighlight = ({path, to, linkName}) => {

    return path === to ? (
        <div className={styles.highlight}>
        <Link to={to}>{linkName}</Link>
        </div>
        ) : (
        <div><Link to={to}>{linkName}</Link></div>
        )
}

const Header = ( {path}) => {

    return (
        <header 
            style={{
                display: "flex",
                backgroundColor: "rgba(53, 50, 50, 0.8)",
                position: "sticky",
                justifyContent: "space-around",
                top: "20px",
                zIndex: 1000,
            }}>
            <div style={{
                    flexGrow: 5,
                    display: "grid",
                    gridTemplateColumns: "0.8fr 1.2fr",
                    padding: "1px 1px",
                    maxWidth: "var(--default-max-width)",
                }}>
                <div>
                    <p style={{
                            fontSize: "1em",
                            color: "var(--default-yellow)",
                        }}>
                        Hudobný skladateľ
                    </p>
                    <h1 style={{
                            fontFamily: `'Abril Fatface', cursive`,
                            fontSize: "2.8em",
                            fontWeight: "lighter",
                            marginTop: "-12px",
                            color: "var(--default-yellow)", 
                        }}>
                        Jozef Podprocký
                    </h1>
                </div>
                <nav className={styles.links}>
                    <SetupLinkLighlight path={path} to='/' linkName='Úvod' />
                    <SetupLinkLighlight path={path} to='/cv' linkName='Životopis' />
                    <SetupLinkLighlight path={path} to='/works' linkName='Tvorba' />
                    <SetupLinkLighlight path={path} to='/listen' linkName='Ukážky' />
                    <SetupLinkLighlight path={path} to='/downloads' linkName='Na stiahnutie' />
                    <SetupLinkLighlight path={path} to='/contact' linkName='Kontakt' />
                </nav>
            </div>
        </header>

    )
}

export default Header