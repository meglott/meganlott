import { useState } from "react";

export default function AboutFile() {
    const [personalActive, setPersonalActive] = useState(true);
    const [educationActive, setEducationActive] = useState(false);
    const [professionalActive, setProfessionalActive] = useState(false);

    const setPersonalTab = () => {
        setPersonalActive(true);
        setEducationActive(false);
        setProfessionalActive(false);
    };

    const setEducationTab = () => {
        setPersonalActive(false);
        setEducationActive(true);
        setProfessionalActive(false);
    };

    const setProfessionalTab = () => {
        setPersonalActive(false);
        setEducationActive(false);
        setProfessionalActive(true);
    };

    return (
        <div role="about-file" className="flex flex-col w-full h-full justify-center items-center">
            <div role="about-nav" className="flex flex-row max-w-lg w-full h-14">
                <button 
                    role="personal-tab" 
                    className={`flex w-1/3 justify-center items-center bg-white border-2 border-purple-900 ${personalActive ? 'border-b-0' : (educationActive ? 'border-b-teal-600' : 'border-b-sky-800')} rounded-t-lg`}
                    onClick={setPersonalTab}
                >
                    <p className="text-purple-900 text-xs md:text-base">PERSONAL</p>
                </button>
                <button 
                    role="education-tab" 
                    className={`flex w-1/3 justify-center items-center bg-white border-2 border-teal-600 ${personalActive ? 'border-b-purple-900' : (educationActive ? 'border-b-0' : 'border-b-sky-800')} rounded-t-lg`}
                    onClick={setEducationTab}
                >
                    <p className="text-teal-600 text-xs md:text-base">EDUCATION</p>
                </button>
                <button 
                    role="professional-tab"
                    className={`flex w-1/3 justify-center items-center bg-white border-2 ${personalActive ? 'border-b-purple-900' : (educationActive ? 'border-b-teal-600' : 'border-b-0')} border-sky-800 rounded-t-lg`}
                    onClick={setProfessionalTab}
                >
                    <p className="text-sky-800 text-xs md:text-base">PROFESSIONAL</p>
                </button>
            </div>
            <div 
                role="main-rectangle" 
                className={`max-w-lg w-full h-1/2 bg-white border-2 border-t-0 ${personalActive ? 'border-purple-900' : (educationActive ? 'border-teal-600' : 'border-sky-800')}`}
            >
                <div className="m-2">
                    {/* Peronsal Copy */}
                    <p className={`${personalActive ? 'flex' : 'hidden'}`}>Personal Copy</p>
                    {/* Education Copy */}
                    <p className={`${educationActive ? 'flex' : 'hidden'}`}>Education Copy</p>
                    {/* Professional Copy */}
                    <p className={`${professionalActive ? 'flex' : 'hidden'}`}>Professional Copy</p>
                </div>
            </div>
        </div>
    )
};