import styles from './Contact.module.css';
import Social from '../Social/Social';

const Contact = () => {
    return <div id='contact' className={styles['contact-container']}>
        <div className={styles['contact-text']}>
            <h2>.Let's Connect</h2>
            <p>Find me on social media or you can send me email.</p>
        </div>  
        <div className={styles['contact-links']}>
            <a href='mailto:d.punda19@gmail.com' className={styles['contact-mail']}> d.punda19@gmail.com</a>
            <Social />
        </div>
    </div>
};

export default Contact;