import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";

const About = () => {
	return (
		<div className='xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden'>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className={`bg-black-100 p-8 rounded-2xl mt-12 max-w-lg ml-auto ${styles.paddingX} overflow-hidden`}>
				<p className={styles.sectionSubText}>Who am I?</p>
				<h2 className={styles.sectionHeadText}>Introduction</h2>

				<motion.p
					variants={fadeIn("", "", 1, 1)}
					className='mt-4 text-white-100 text-[17px] max-w-3xl leading-[30px]'>
					Highly motivated and detail-oriented Computer Programming
					student with over two years of hobby programming experience
					in Unity game development. Proficient in C#, Python, and
					Java, with knowledge of web development languages and
					advanced database practices. Demonstrated skills through
					various projects, showcasing problem-solving abilities.
					Strong team player, eager to learn and contribute to an
					organization. Passionate about programming and dedicated to
					personal and professional growth. Seeking real work
					experience to further enhance skills.
				</motion.p>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(About, "about");
