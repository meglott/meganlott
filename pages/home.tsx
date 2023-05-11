export default function Home() {
	return (
		<div 
		role="title-page"
        id="home"
		className="w-full h-full bg-splash-screen bg-no-repeat bg-center bg-contain">
			<div className="flex flex-col w-full h-full items-center justify-center gap-3">
				<p className="text-title text-light-green text-stroke">MEGAN LOTT</p>
				<p className="text-subtitle text-light-green w-3/5 text-center text-stroke">
					A full-stack software developer with a focus on usability, responsive applications, and scalability.
				</p>
			</div>
		</div>
	);
};