import ProjectCard from "../components/project-card";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const projectList = [
	{
		imageSrc: '/hometeam-logo.svg',
		imageAlt: 'HomeTeam by ReflexAI',
		link: 'https:/hometeam.reflexai.com',
		title: 'HomeTeam',
		subtitle: 'Google.org Fellowship - Technical Lead',
		description: 'A responsive web application to offer education and resources to military veterans looking to support their colleagues experiencing mental health crises.',
		attributes: [
			'TypeScript',
			'React',
			'Next.js',
			'Docker',
			'MongoDB',
			'Tailwind CSS',
			'Auth0',
			'Swagger',
			'Terraform',
			'Jest',
			'Google Cloud Platform'
		]
	}, {
		imageSrc: '/homepage.png',
		imageAlt: 'Homepage of meganlott.com', 
		link: 'https://meganlott.com',
		title: 'Megan Lott LLC', 
		subtitle: 'Design, Develop, and Deploy',
		description: 'This is it! This portfolio site was designed and built by yours truly.',
		attributes: [
			"TypeScript", 
			"React",
			"Next.js", 
			"Tailwind CSS",
			"AWS Amplify",
			"Route 53",
			"AWS SES"
		]
	}
];

export default function Projects() {

	const [viewableProjects, setViewableProjects] = useState(projectList);

	const smallScreen = useMediaQuery("(max-width:1023px)");
	useEffect(() => {
		if (smallScreen) {
			setViewableProjects([projectList[0]])
		} else {
			setViewableProjects(projectList);
		}
	}, [smallScreen]);

	return (
		<div 
		role="projects-page"
        id="projects"
		className="w-full h-full flex flex-col gap-4 justify-between items-center py-4 lg:py-2 overflow-y-auto"
        >
			<div role="header" className="h-24 md:h-40 w-full bg-heading bg-no-repeat bg-center bg-cover lg:bg-contain flex flex-shrink-0 justify-center items-center">
				<p className="text-title-sm md:text-heading text-white text-stroke-subtitle">PROJECTS</p>
			</div>
			<div className="flex flex-col h-fit justify-center">
				<div role="cards" className="flex flex-row h-max-full w-full gap-0 lg:gap-8 pt-0 lg:pt-4 justify-items-center">
					<div role="left-arrow" className="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 stroke-light-gray">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
						</svg>
					</div>
					{ viewableProjects.map((project, index) => 
					<ProjectCard 
						key={index}
						imageSrc={project.imageSrc!}
						imageAlt={project.imageAlt!}
						link={project.link!}
						title={project.title!}
						subtitle={project.subtitle!}
						description={project.description!}
						attributes={project.attributes!}
					/>)}
					<div role="right-arrow" className="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 stroke-light-gray">
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</div>
				</div>
			</div>
			<div className="text-slate-800">
				<p>Like what you see? <Link href="#contact-page" className="font-bold text-purple-900">Contact me</Link>.</p>
			</div>
		</div>
	);
};