import AboutFile from "../components/about-file";

export default function About() {
	return (
		<div 
            role="about-page"
            id="about"
            className="flex-1 w-full h-full bg-light-green snap-start overflow-y-auto"
        >
            <div className="flex flex-row h-full justify-center items-center">
                <div className="w-1/2">
                    Left Side 
                </div>
                <div className="flex w-1/2 h-full justify-center items-center">
                    <AboutFile />
                </div>
            </div>
		</div>
	);
};