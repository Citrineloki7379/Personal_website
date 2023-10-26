import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { education } from '../constants';
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ educate }) => (
  <VerticalTimelineElement
  contentStyle={{background: '#1d1836', color: '#8499e3'}}
  contentArrowStyle={{borderRight: '7px solid #8499e3'}}
  date={educate.date}
  iconStyle={{background: educate.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={educate.icon} alt={educate.company_name} 
      className="w-[60%] h-[60%] object-contain"/>
    </div>
  }>
    <div> 
      <h3 className="text-white text-[24px] font-bold">
        {educate.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold"
      style={{margin: 0}}>
        {educate.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {educate.points.map((point, index) => (
        <li key={`experience-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const EducationTimeline = () => {
  return (
    <>
      <motion.div variants={textVariant()} viewport={{amount: "some"}}>
        <h2 className={styles.sectionHeadText}>
          Education
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={index} educate = {education}>

            </EducationCard>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(EducationTimeline, "education");