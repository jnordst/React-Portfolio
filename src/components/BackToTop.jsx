import React from "react";
import { Link } from "react-router-dom";

const BackToTop = () => {
	return (
		<Link
			to='/'
			className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary block mx-auto mt-12'
			onClick={() => {
				window.scrollTo(0, 0);
			}}>
			Back to Top
		</Link>
	);
};

export default BackToTop;
