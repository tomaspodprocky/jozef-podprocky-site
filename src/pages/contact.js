import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/contact.module.css'

const ContactPage = () => {
    return (
      <Layout pageTitle="Kontakt">
          <form method="post" action="https://getform.io/f/595d4fc2-05ba-4b3f-94a1-ed9a1e445223">
            <table className={styles.gridStyle}>
                <tr>
                    <td><label for="name">Meno</label></td>
                    <td><input type="text" name="name" id="name" className={styles.input}/></td>
                </tr>
                <tr>
                    <td><label for="email">E-mail</label></td>
                    <td><input type="email" name="email" id="email" className={styles.input}/></td>
                </tr>
                <tr>
                    <td><label for="subject">Predmet</label></td>
                    <td><input type="text" name="subject" id="subject" className={styles.input}/></td>
                </tr>
            </table>
            <label for="message">
                Správa<br />
                <textarea name="message" id="message" rows="5" className={styles.input}/>
            </label>
            <div>
            <button type="submit" className={styles.input}>Send</button>
            <input type="reset" value="Clear" className={styles.input} />
            </div>
        </form>
      </Layout>
    )
  }
  // Step 3: Export your component
  export default ContactPage