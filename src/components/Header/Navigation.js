import Social from "../Social/Social";
import styles from './Navigation.module.css'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Navigation = () => { 

    return (
        <nav className={styles['header-nav']}>
            <ul className={styles['header-nav-ul']}>
                <li>
                    <AnchorLink className={styles['header-nav-a']} href='#about' rel='noopener, noreferrer'>.About Me</AnchorLink>
                </li>
                <li>
                    <AnchorLink className={styles['header-nav-a']} href='#projects' rel='noopener, noreferrer'>.My Projects</AnchorLink>
                </li>
                <li>
                    <AnchorLink className={styles['header-nav-a']} href='#contact' rel='noopener, noreferrer'>.Contact</AnchorLink>
                </li>
            </ul>
            <Social/>
        </nav>
    )
};

export default Navigation;