import Image from "next/image";
import ProjectCard from "../components/project-card";
import Link from "next/link";

export default function Projects() {
	return (
		<div 
		role="projects-page"
        id="projects"
		className="w-full h-full flex flex-col justify-center items-center"
        >
			<div role="header" className="h-24 lg:h-40 w-full bg-heading bg-no-repeat bg-center bg-contain flex justify-center items-center">
				<p className="text-title-sm md:title-md lg:text-heading text-white text-stroke">PROJECTS</p>
			</div>
			<div className="flex flex-col flex-1 h-fit justify-center">
				<div role="cards" className="flex flex-row h-max-full w-full gap-0 lg:gap-8 pt-0 lg:pt-4 justify-items-center">
					<div role="left-arrow" className="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 stroke-light-gray">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
						</svg>
					</div>
					<ProjectCard 
						imageSrc="/homepage.png"
						imageAlt="Homepage of meganlott.com" 
						title="Megan Lott LLC" 
						subtitle="Design, Develop, and Deploy"
						description="This is it! This portfolio site was designed and built by yours truly."
						attributes={[
							"TypeScript", 
							"React",
							"Next.js", 
							"Tailwind CSS",
							"AWS Amplify",
							"Route 53",
							"SendGrid"
						]}
					/>
					{/* <ProjectCard 
						imageSrc=""
						imageAlt="HomeTeam by ReflexAI"
						title="HomeTeam" 
						description="A responsive web application to offer education and resources to military veterans looking to support their colleagues experiencing mental health crises."
						attributes={[
							"TypeScript", 
							"React", 
							"Next.js",
							"Docker", 
							"MongoDB",
							"TailwindCSS", 
							"Auth0", 
							"Swagger", 
							"Terraform",  
							"Jest",
							"Google Cloud Platform",
							"Contentful"
						]}
					/> */}
					<div role="right-arrow" className="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 stroke-light-gray">
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</div>
				</div>
			</div>
			<div className="text-slate-800 mb-4">
				<p>Like what you see? <Link href="#contact-page" className="font-bold text-purple-900">Contact me</Link>.</p>
			</div>
		</div>
	);
};