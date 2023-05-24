import AboutFile from "../components/about-file";

export default function About() {
	return (
		<div 
            role="about-page"
            id="about"
            className="flex-1 w-full h-full bg-light-green snap-start overflow-y-auto"
        >
            <div className="flex flex-col lg:flex-row lg:gap-4 h-full justify-center items-center">
                <div className="w-4/5 lg:w-2/5">
                    Left Side 
                </div>
                <div className="flex w-4/5 lg:w-2/5 h-4/5 lg:h-full justify-center items-center">
                    <AboutFile />
                </div>
            </div>
		</div>
	);
};