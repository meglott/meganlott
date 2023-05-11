import { UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import linkedInMark from "../../public/linkedin-mark.svg";
import githubMark from "../../public/github-mark.svg";

function FooterComponent() {    
    return (  
        <nav className="sticky h-24 top-0 left-0 w-full bg-white border-t border-light-gray">
            <div className="flex w-full h-full py-5 px-10 justify-between items-center">
                <div className="flex items-center pl-10 gap-5">
                    <p className="text-sm font-roboto font-normal">© 2023 Megan Lott LLC</p>
                </div>
                <div className="flex justify-end items-center pr-10 gap-10">
                    <Link href="https://www.linkedin.com/in/megan-lott-35322284/">
                        <Image 
                            priority
                            src={linkedInMark}
                            width={30}
                            height={30}
                            alt="LinkedIn Logo"
                        />
                    </Link>
                    <Link href="https://github.com/meglott">
                    <Image 
                            priority
                            src={githubMark}
                            width={30}
                            height={30}
                            alt="GitHub Logo"
                        />
                    </Link>
                </div>
            </div>
        </nav>    
    )
}
export default FooterComponent