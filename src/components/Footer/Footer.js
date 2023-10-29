import Contact from '../Contact/Contact';
import styles from './Footer.module.css';
import { AiFillHeart } from 'react-icons/ai';


const Footer = ( )=> {
    return <footer >

        <div className={styles['footer-container']}>
              <Contact/>
              <p className={styles['footer-text']}>.Developed with love in 2023 <AiFillHeart /></p>
        </div>
       
     </footer>
}

export default Footer;