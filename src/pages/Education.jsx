import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { education } from "../constants";

const EducationCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#212121",
				color: "#f3f3f3",
			}}
			contentArrowStyle={{ borderRight: "7px solid #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img
						src={experience.icon}
						alt={experience.company_name}
						className='w-[60%] h-[60%] object-contain'
					/>
				</div>
			}>
			<div>
				<h3 className='white-100 text-[24px] font-bold'>
					{experience.title}
				</h3>

				<p
					className='white-100 text-[16px] font-semibold'
					style={{ margin: 0 }}>
					{experience.company_name}
				</p>

				<ul className='mt-5 list-disc ml-5 space-y-2'>
					{experience.points.map((point, index) => (
						<li
							key={`experience-point-${index}`}
							className='text-white-100 text-[14px] pl-1 tracking-wider'>
							{point}
						</li>
					))}
				</ul>
			</div>
		</VerticalTimelineElement>
	);
};

const Education = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I've learned</p>
				<h2 className={styles.sectionHeadText}>Education</h2>
			</motion.div>

			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{education.map((experience, index) => (
						<EducationCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Education, "work");
