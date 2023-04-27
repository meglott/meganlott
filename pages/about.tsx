export default function About() {
	return (
		<div 
            role="about-page"
            className="flex w-full h-full bg-light-green items-center place-content-center"
        >
            <div 
                role="content" 
                className="grid grid-cols-2 grid-rows-1 h-5/6 w-5/6 content-center justify-center divide-light-gray divide-x-4"
            >
                    <div className="pr-10">
                        <p>LEFT SIDE</p>
                    </div>
                    <div className="pl-10">
                        <p>RIGHT SIDE</p>
                    </div>
            </div>
		</div>
	);
};