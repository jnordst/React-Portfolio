import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary p-5 rounded-2xl md:w-[320px] w-full shadow-md shadow-primary'>
				<div className='relative w-full h-[230px]'>
					<img
						src={image}
						alt='project_image'
						className='w-full h-full object-cover rounded-2xl'
					/>

					<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
						<div
							onClick={() =>
								window.open(source_code_link, "_blank")
							}
							className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
							<img
								src={github}
								alt='source code'
								className='w-1/2 h-1/2 object-contain'
							/>
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>{name}</h3>
					<p className='mt-2 text-white text-[14px]'>{description}</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Projects = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>What I've done</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className='mt-3 text-white-100 text-[17px] max-w-3xl leading-[30px]'>
					I have worked on a variety of projects, ranging from simple
					responsive websites to useful applications. The following
					projects showcase a variety of skills and highlight a
					diverse range of technologies. Each project also has a link
					to the source code on Github, so feel free to check it out!
					Through these projects and more, my portfolio reflects my
					dedication, creativity, and ability to deliver solutions to
					complex challenges.
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7'>
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Projects, "projects");
