import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Projects from "./projects";

export default function HomePage() {
	return (
		<div className="h-screen w-full">
			<Home />
			<About />
			<Projects />
			<Contact />
		</div>
	);
};