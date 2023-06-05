import React from "react";
import { styles } from "../styles";
import { heroLinks } from "../constants";
import { logo } from "../assets";

const Hero = () => {
	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div
				className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-between`}>
				{/* Pin */}
				<div className='flex flex-row gap-5'>
					<div className='flex flex-col items-center mt-5'>
						<div className='w-5 h-5 rounded-full bg-[#FFE998]'></div>
						<div className='w-1 sm:h--80 h-40 gold-gradient'></div>
					</div>

					{/* Header + Socials */}
					<div>
						{/* Header */}
						<h1 className={`${styles.heroHeadText} text-white`}>
							Hi, I'm{" "}
							<span className='text-hero'>Jacob</span>
						</h1>
						<p
							className={`${styles.heroSubText} mt-2 text-white-100`}>
							A{" "}
							<span className='text-hero'>
								Student Developer
							</span>{" "}
							<br className='sm:block hidden' />
							with a passion for learning
						</p>

						{/* Socials */}
						<div className='flex flex-row items-center gap-5 mt-5'>
							{heroLinks.map((link, index) => (
								<img
									key={`${index}`}
									src={link.src}
									alt={link.alt}
									className={styles.icon}
									onClick={() =>
										window.open(link.link, "_blank")
									}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Logo */}
				<img
					src={logo}
					alt='logo'
					className='max-[825px]:hidden min-[800px]:w-[256px] min-[800px]:h-[256px] '
				/>
			</div>
		</section>
	);
};

export default Hero;
