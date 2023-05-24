export default function Home() {
	return (
		<div 
		role="title-page"
        id="home"
		className="w-full h-full">
			{/* TABLET / DESKTOP */}
			<div className="hidden md:visible md:flex w-full h-full bg-splash-screen bg-no-repeat bg-center bg-contain">
				<div className="flex flex-col w-full h-full items-center justify-center gap-3">
					<p className="md:text-title-md lg:text-title text-light-green text-stroke-subtitle">MEGAN LOTT</p>
					<p className="md:text-subtitle-md lg:text-subtitle text-purple-900 w-3/5 text-center">
						A full-stack software developer with a focus on usability, responsive applications, and scalability.
					</p>
				</div>
			</div>
			{/* MOBILE */}
			<div className="visible md:hidden w-full h-full flex flex-col items-center justify-center gap-5">
				<div className="w-full h-1/3 bg-splash-screen bg-no-repeat bg-center bg-contain flex items-center justify-center">
					<p className="text-title-sm text-light-green text-stroke-subtitle">MEGAN LOTT</p>
				</div>
				<div className="w-full h-fit px-4 text-purple-900 text-smSubtitle text-center flex items-center justify-center">
					A full-stack software developer with a focus on usability, responsive applications, and scalability.
				</div>
			</div>
		</div>
	);
};