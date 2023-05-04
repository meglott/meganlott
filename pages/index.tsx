import About from "../components/about";
import Contact from "./contact";
import Home from "./home";
import Projects from "./projects";

export default function HomePage() {
	return (
		<div>
			<Home />
			<About />
			<Projects />
			<Contact />
		</div>
	);
};