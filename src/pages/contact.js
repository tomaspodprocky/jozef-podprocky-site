import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/contact.module.css'

const ContactPage = ({location}) => {

    React.useEffect(() => {
        document.body.style.backgroundColor = "transparent";
        document.body.style.backgroundImage = "url(/contact.jpg)";
        document.body.style.backgroundPosition = "top left";
      })

    return (
        <div>
        <Layout pageTitle="Kontakt" page={location.pathname}>
            <form className={styles.gridStyle} 
                    method="post" action="https://getform.io/f/595d4fc2-05ba-4b3f-94a1-ed9a1e445223">
    
            <label >Meno:
            <input type="text" name="name" id="name" size="20" className={styles.input}/>
            </label>
            <label >E-mail:
            <input type="email" name="email" id="email" size="20" className={styles.input}/>
            </label>
            <label >Predmet:
            <input type="text" name="subject" id="subject" size="20" className={styles.input}/>
            </label>

            <label >
                Správa:<br />
                <textarea name="message" id="message" rows="5" className={styles.input}/>
            </label>
            <div>
            <button type="submit" className={styles.button}>Poslať</button>
            <input type="reset" value="Zmazať" className={styles.button} />
            </div>
        </form>
        </Layout>
        </div>
    )
  }
  // Step 3: Export your component
  export default ContactPage