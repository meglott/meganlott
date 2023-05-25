import Image from "next/image";
import AboutFile from "../components/about-file";

export default function About() {
	return (
		<div 
            role="about-page"
            id="about"
            className="w-full h-full flex flex-col lg:flex-row justify-between md:justify-center items-center bg-light-green overflow-y-auto"
        >
            <div className="flex flex-col w-full lg:flex-row gap-8 lg:gap-32 h-full justify-center items-center overflow-y-auto">
                <div className="w-fit pt-8 lg:pt-0">
                    <div role="lg-polaroid" className="hidden lg:flex flex-col pt-4 px-4 gap-3 -rotate-12 items-center w-fit h-60 lg:h-96 bg-white border border-black drop-shadow-polaroid">
                        <div role="thumbtack" className="absolute -top-2 left-32">
                            <Image 
                                className="drop-shadow-polaroid"
                                src={"/thumbtack.png"}
                                height={60}
                                width={60}
                                alt="thumbtack"
                            />
                        </div>
                        <Image
                            src={"/about-me.png"}
                            height={300}
                            width={300}
                            alt="Megan with her dog Titan"
                        />
                        <p className="text-2xl font-Permanent-Marker">Florida, 2018</p>
                    </div>
                    <div role="sm-polaroid" className="lg:hidden flex flex-col pt-2 px-2 gap-2 -rotate-12 items-center w-fit h-64 bg-white border border-black drop-shadow-polaroid">
                        <div role="thumbtack" className="absolute -top-2 left-20">
                            <Image 
                                className="drop-shadow-polaroid"
                                src={"/thumbtack.png"}
                                height={40}
                                width={40}
                                alt="thumbtack"
                            />
                        </div>
                        <Image
                            src={"/about-me.png"}
                            height={200}
                            width={200}
                            alt="Megan with her dog Titan"
                        />
                        <p className="text-lg font-Permanent-Marker">Florida, 2018</p>
                    </div>
                </div>
                <div className="flex w-4/5 lg:w-2/5 h-4/5 min-h-fit lg:h-full justify-center items-center">
                    <AboutFile />
                </div>
            </div>
		</div>
	);
};