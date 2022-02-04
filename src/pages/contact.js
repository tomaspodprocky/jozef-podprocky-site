import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/contact.module.css'

const ContactPage = () => {
    return (
        <div>
        <Layout pageTitle="Kontakt" id="contact">
            <form className={styles.gridStyle} 
                    method="post" action="https://getform.io/f/595d4fc2-05ba-4b3f-94a1-ed9a1e445223">
    
            <label for="name">Meno:
            <input type="text" name="name" id="name" size="20" className={styles.input}/>
            </label>
            <label for="email">E-mail:
            <input type="email" name="email" id="email" size="20" className={styles.input}/>
            </label>
            <label for="subject">Predmet:
            <input type="text" name="subject" id="subject" size="20" className={styles.input}/>
            </label>

            <label for="message">
                Správa:<br />
                <textarea name="message" id="message" rows="5" className={styles.input}/>
            </label>
            <div>
            <button type="submit" className={styles.button}>Poslať</button>
            <input type="reset" value="Zmazať" className={styles.button} />
            </div>
        </form>
        </Layout>
        <script type="text/javascript">
        {
        (function() {
            document.body.style.backgroundColor = "transparent";
            document.body.style.backgroundImage = "url(/contact.jpg)";
            document.body.style.backgroundPosition = "top left";
            })()
        }
        </script>
        </div>
    )
  }
  // Step 3: Export your component
  export default ContactPage