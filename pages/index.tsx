import FooterComponent from "../components/layout/footer";
import HeaderComponent from "../components/layout/header";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Projects from "./projects";

export default function HomePage() {
	return (
		<div 
			id="outermost-div"
			className="flex flex-col h-screen"
		>
			<div className="h-24 sticky top-0 w-full">
				<HeaderComponent />
			</div>
			<div 
				id="main-div"
				className="flex-1 overflow-y-hidden"
			>
				<Home />
				{/* <About /> */}
				<Projects />
				<Contact />
			</div>
			<div 
				id="footer-div"
				className="sticky bottom-0 w-full"
			>
				<FooterComponent />
			</div>
		</div>
	);
};