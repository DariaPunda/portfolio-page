import styles from './Portfolio.module.css';
import ProjectSlider from '../dop/Slider';
import ToDoList from '../../assets/ToDoList.jpg';

const projects = [
    {
        title: 'To Do List',
        image: ToDoList,
        link:'https://dariastodo.netlify.app/',
    }
]


const Portfolio = () => {
    return <section id='projects' className={styles.container} >
        <div className={styles['projects-container']}>
        <h2 className={styles.header}>.Take a look on my projects</h2>
            <ProjectSlider projects={projects} />
        </div>
    </section>
}
export default Portfolio;