import styles from './Social.module.css';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


const Social = () => {
    return <ul className={styles['social-list']}>
        <li><a href='https://www.linkedin.com/in/daria-mishustina-673a16211/' target="_blank" rel="noreferrer" > <AiFillLinkedin className={styles['social-icon'] } /></a></li>
        <li><a href='https://github.com/DariaPunda' target="_blank" rel="noreferrer"><AiFillGithub className={styles['social-icon'] }/> </a></li>
    </ul>
};

export default Social;