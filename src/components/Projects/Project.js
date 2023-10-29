import React from 'react';
import styles from '../dop/Slider.module.css';


const Project = ({title, image, link, currentIndex, index}) => {
  return (
      <div className='project'>
          <a href={link} target='blank' rel='noopener noreferrer'>
              <img src={image} alt={ title} className={index === currentIndex ? `${styles.slide} ` : `${styles['slide-hidden']}`}/>
              <h3>{ title}</h3>
          </a>
    </div>
  )
}

export default Project