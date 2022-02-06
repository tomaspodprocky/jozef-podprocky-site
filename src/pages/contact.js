import * as React from 'react'
import Layout from '../components/layout'
import Separator from '../components/separator'
import * as styles from '../styles/contact.module.css'

const ContactPage = ({location}) => {

    React.useEffect(() => {
        document.body.style.backgroundColor = "transparent";
        document.body.style.backgroundImage = "url(/contact.jpg)";
        document.body.style.backgroundPosition = "top left";
        // document.body.style.transition = "background-image 0s";
        // document.body.style.transitionDelay = "0s";
      })

    return (
        <div>
        <Layout pageTitle="Kontakt" page={location.pathname}>
            <form className={styles.gridStyle} 
                    method="post" action="https://getform.io/f/595d4fc2-05ba-4b3f-94a1-ed9a1e445223">
    
            <label >Meno:
            <input type="text" name="name" id="name" size="30" className={styles.input}/>
            </label>
            <label >E-mail:
            <input type="email" name="email" id="email" size="30" className={styles.input}/>
            </label>
            <label >Predmet:
            <input type="text" name="subject" id="subject" size="30" className={styles.input}/>
            </label>

            <label >
                Správa:<br />
                <textarea name="message" id="message" rows="5" cols="28" className={styles.input}/>
            </label>
            <div>
            <button type="submit" className={styles.button}>Poslať</button>
            <input type="reset" value="Zmazať" className={styles.button} />
            </div>
        </form>
        <div className="separator"><Separator /></div>
        </Layout>
        </div>
    )
  }
  // Step 3: Export your component
  export default ContactPage