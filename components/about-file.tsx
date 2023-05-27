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
                className={`max-w-lg w-full min-h-fit mb-8 bg-white border-2 border-t-0 ${personalActive ? 'border-purple-900' : (educationActive ? 'border-teal-600' : 'border-sky-800')}`}
            >
                <div className="m-2 h-72">
                    {/* Peronsal Copy */}
                    <div className={`${personalActive ? 'flex' : 'hidden'} flex-col text-base`}>
                        <p>
                            
                            Welcome! My name is <b className="text-purple-900">Megan Lott</b>. I'm a <b className="text-purple-900">full-stack software engineer</b> with over 8 years of experience at top Tech companies.
                            I have a passion for <i>designing</i>, <i>developing</i>, and <i>deploying</i> products that put the <b className="text-purple-900">user first</b>.
                        </p>
                        <br />
                        <p>
                            Outside of work, I love to spend time with my husband and two dogs, <b className="text-purple-900">Titan</b> and <b className="text-purple-900">Emma</b>.
                            I am a proud Navy wife and currently stationed in <b className="text-purple-900">Orlando, Florida</b>.
                            I regularly train as an amateur gymnast and hope to compete in 2024.
                        </p>
                    </div>
                    {/* Education Copy */}
                    <div className={`${educationActive ? 'flex' : 'hidden'} flex-col h-fit`}>
                        <h1 className="font-bold text-xl text-teal-600">Master of Science Computer Science</h1>
                        <h2 className="font-semibold text-base italic">Georgia Institute of Technology, December 2023</h2>
                        <p className="text-sm"><b className="text-teal-600">Specialization:</b> Computing Systems</p>
                        <p className="text-sm"><b className="text-teal-600">GPA:</b> 4.0</p>
                        <br />
                        <h1 className="font-bold text-xl text-teal-600">Bachelor of Science Computer Science</h1>
                        <h2 className="font-semibold text-base italic">Georgia Institute of Technology, December 2016</h2>
                        <p className="text-sm"><b className="text-teal-600">Specializations:</b> Modeling and Simulation; Information Internetworks; Media</p>
                        <p className="text-sm"><b className="text-teal-600">GPA:</b> 3.88</p>

                    </div>
                    {/* Professional Copy */}
                    <div className={`${professionalActive ? 'flex' : 'hidden'} flex-col h-full overflow-y-auto`}>
                        <h1 className="font-bold text-xl text-sky-800">Google.org Fellowship</h1>
                        <p className="text-sm"><b className="font-semibold text-sm italic">Technical Lead</b>, January 2023 - Present</p>
                        <ul className="text-xs list-disc list-outside ms-8">
                            <li>Lead a team of engineers in the development of a responsive web application to offer education and resources to military veterans looking to support their colleagues experiencing mental health crises</li>
                            <li>Design a full-stack application including a front-end and back-end server and integration with AI models, a Content Management platform, video hosting software, APM, and Google Cloud Platform</li>
                            <li>Work cross-functionally with Product, User Experience, and Learning and Development teams to define product specification and engineering requirements</li>
                            <li>Handle project management for engineering, including defining tasks and priorities, hosting regular standups, and leading sprint retrospectives and planning</li>
                            <li>Code, test, and deploy production-ready features for the end product</li>
                        </ul>
                        <br />
                        <h1 className="font-bold text-xl text-sky-800">Google</h1>
                        <p className="text-sm"><b className="font-semibold text-sm italic">Software Engineer</b>, February 2020 - December 2022</p>
                        <ul className="text-xs list-disc list-outside ms-8">
                            <li>Design, implement, test, and launch Identity Verification flows in compliance with regulatory laws in order to keep Google business compliant in international markets</li>
                            <li>End-to-end development of user flows to prevent money laundering through Google Pay services</li>
                            <li>Coordinating user experiences across multiple required verifications to reduce friction on users</li>
                        </ul>
                        <br />
                        <h1 className="font-bold text-xl text-sky-800">Two Sigma Investments</h1>
                        <p className="text-sm"><b className="font-semibold text-sm italic">Software Engineer</b>, February 2017 - January 2020</p>
                        <ul className="text-xs list-disc list-outside ms-8">
                            <li>Develop best practices for microservice infrastructure and implement Terraform modules for AWS resource orchestration</li>
                            <li>Design, implement, and test RESTful microservices (Java), including an authentication service and a write-once-read-many wrapper for S3</li>
                            <li>Roadmap, design, and develop the insurance product development kit, including an XML to JavaScript compiler (Scala), and an IntelliJ plugin (Java)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};