import Image from "next/image";

export default function Projects() {
	return (
		<div 
		role="projects-page"
        id="projects"
		className="flex-1 w-full h-full bg-white"
        >
			<div role="header" className="h-40 pt-14 bg-heading bg-no-repeat bg-center bg-contain text-center">
				<p className="text-heading text-light-green text-stroke">PROJECTS</p>
			</div>
			<div role="cards" className="grid pt-20 justify-items-center">
				<div role="project-card-1" className="max-w-sm rounded-xl overflow-hidden shadow-lg">
					<img className="w-full" src="/splash-screen.png" alt="meganlott.com" />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">meganlott.com</div>
						<p className="text-gray-700 text-base">
						You're looking at it! This portfolio site was designed and built by yours truly.
						</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-light-gray rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">TypeScript</span>
						<span className="inline-block bg-light-gray rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Next.js</span>
						<span className="inline-block bg-light-gray rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">TailwindCSS</span>
					</div>
				</div>
			</div>
		</div>
	);
};