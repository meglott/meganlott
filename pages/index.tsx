import FooterComponent from "../components/layout/footer";
import HeaderComponent from "../components/layout/header";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Projects from "./projects";

export default function HomePage() {
	return (
		<div className="flex flex-col h-screen">
			<div className="h-24 sticky top-0 w-full">
				<HeaderComponent />
			</div>
			<div className="flex-1 overflow-y-scroll">
				<Home />
				<About />
				<Projects />
				<Contact />
				<FooterComponent />
			</div>
		</div>
	);
};