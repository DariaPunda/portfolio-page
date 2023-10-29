import Navigation from './Navigation';
import styles from './Header.module.css';

const Header = () => { 
    return <header>
        <div className={styles['header-container']}>
        <p className={styles['header-text']}>.Nice to meet you</p>
        <Navigation/>
    </div>
    </header>
}
export default Header;