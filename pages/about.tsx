import Image from "next/image";

export default function About() {
	return (
		<div 
            role="about-page"
            id="about"
            className="flex w-full h-full bg-light-green items-center justify-center"
        >
            <div 
                role="content" 
                className="grid grid-cols-2 grid-rows-1 h-5/6 w-full divide-light-gray divide-x-4"
            >
                    <div className="pr-10 bg-about-background bg-no-repeat bg-center bg-contain">
                    
                    </div>
                    <div className="pl-10">
                        <p>RIGHT SIDE</p>
                    </div>
            </div>
		</div>
	);
};