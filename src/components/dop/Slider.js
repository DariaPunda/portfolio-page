import styles from './Slider.module.css';
import { useState } from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import {AiOutlineArrowLeft} from "react-icons/ai";
import project1 from '../../assets/img1-370.jpeg';
import project2 from '../../assets/img2-370.jpeg';
import project3 from '../../assets/img3-370.jpeg';
import ToDoList from '../../assets/ToDoList.jpg';
import Button from '../UI/Button';
import Project from '../Projects/Project';


const projects = [project1,project2,project3, ToDoList];

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        console.log('Next slide clicked');
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }

    const prevSlide = () => {
        console.log('Previous slide clicked');
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    }


    return (
        <div className={styles.slider}>
            {projects.map((project, index) => (
                <><img src={project} alt={`Project number ${index + 1}`} key={index}
                    className={index === currentIndex ? `${styles.slide} ` : `${styles['slide-hidden']}`}>
                </img>
                    <Project
                        key={index}
                        index={index}
                        title={project.title}
                        image={project.image}
                        link={project.link}
                    currentIndex={currentIndex}
                    />
                </>
            ))}
             <Button className={styles.prev} onClick={prevSlide}><AiOutlineArrowLeft /></Button>
            <Button className={styles.next} onClick={nextSlide}><AiOutlineArrowRight/></Button>
        </div>
    )
}

export default ProjectSlider;