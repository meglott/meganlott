import Image from "next/image";
import ProjectCard from "../components/project-card";

export default function Projects() {
	return (
		<div 
		role="projects-page"
        id="projects"
		className="w-full h-full bg-white"
        >
			<div role="header" className="h-40 pt-14 bg-heading bg-no-repeat bg-center bg-contain text-center">
				<p className="text-heading text-white text-stroke">PROJECTS</p>
			</div>
			<div role="cards" className="w-full grid grid-rows-1 grid-flow-col gap-0 pt-20 justify-items-center">
				<div role="left-arrow" className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20 stroke-light-gray">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</div>
				<ProjectCard />
				<ProjectCard />
				<div role="right-arrow" className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20 stroke-light-gray">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</div>
			</div>
		</div>
	);
};