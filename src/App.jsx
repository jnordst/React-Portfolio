import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Education,
	Feedbacks,
	Hero,
	Navbar,
	Skills,
	Projects,
} from "./pages";
import { BackToTop } from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>

				<About />
				<Education />
				<Skills />
				<Projects />
				<Feedbacks />
				<Contact />
				<BackToTop />
			</div>
		</BrowserRouter>
	);
};

export default App;
