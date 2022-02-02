// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/cv.module.css'

// Step 2: Define your component
const CvPage = () => {
  return (
    <Layout pageTitle="Životopis">
      <div className={styles.page}>
        <div className={styles.img}>
          <StaticImage
              alt="Portrait"
              src="../images/JP-Portrait.jpg"
          />
        </div>
        <div className={styles.paragraph}>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus nisi ac enim facilisis consectetur. Duis at lorem a justo sodales iaculis. Vestibulum nec est eget lectus laoreet condimentum. Vestibulum ultrices mattis mi eu vestibulum. Duis tristique ipsum eu eros tincidunt pretium. Nam pellentesque quis neque vel facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin et mauris non nisi posuere venenatis. Proin nec pellentesque magna. Phasellus ut velit tincidunt, mollis nisl vitae, scelerisque libero.</p>
        <p>Morbi a mi nec mauris mollis consequat a eget nunc. Phasellus ornare felis lorem, nec porta odio imperdiet quis. Ut ac sapien vel nibh vehicula iaculis ut eu mi. Nam ut pretium sapien. Sed varius elit eu ex feugiat, vitae blandit mauris varius. Duis ut dui quam. Donec sollicitudin sapien in dictum vulputate. Sed ut mattis dui. Proin mollis, metus sit amet dignissim rutrum, augue enim vulputate quam, eget consectetur augue velit id lacus. Integer pretium at urna semper semper. In fermentum eget nulla eu blandit. Ut aliquam lacinia neque, et condimentum lacus dapibus et. Fusce volutpat augue vitae neque mollis mattis. Ut cursus ligula vitae nibh viverra ultricies id non est. Sed tincidunt magna felis, at malesuada ligula sollicitudin quis.</p>
        <p>Sed tristique metus elementum, faucibus nisl in, imperdiet nulla. In hac habitasse platea dictumst. Nunc id mollis erat, sit amet luctus lectus. Vestibulum maximus commodo sapien, a ullamcorper ipsum molestie quis. In arcu lorem, auctor elementum orci at, placerat auctor leo. Nullam vitae mollis diam. Curabitur tincidunt gravida mi, eget porttitor mi blandit dictum. Vivamus a erat eu augue laoreet euismod vitae sed turpis. Curabitur efficitur vestibulum turpis. </p>
        </div>
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default CvPage