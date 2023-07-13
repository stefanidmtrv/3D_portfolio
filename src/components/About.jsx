import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard =({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am an enthusiastic and resilient Computer Science graduate. I completed my Master's degree at
       Swansea University with a First Class Honours Degree. I am passionate about software and web development, with experience in Java, 
       Javascript, HTML, CSS and C#. I have experience in web development and MVC frameworks, gained from internships 
       (Nuxt.js, Vue.js) and projects (Laravel), and I am currently learning React.js. I consider myself a good problem solver, 
       willing to apply my skills and learn new technologies.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>

    
  )
}

export default SectionWrapper(About , "about")