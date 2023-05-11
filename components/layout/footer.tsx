import { UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

function FooterComponent() {    
    return (  
        <nav className="sticky h-24 top-0 left-0 w-full bg-white border-t border-light-gray">
            <div className="flex w-full h-full py-5 px-10 justify-between items-center">
                <div className="flex items-center pl-10 gap-5">
                    <p className="text-sm font-roboto font-normal">© 2023 Megan Lott</p>
                </div>
                <div className="flex justify-end items-center pr-10 gap-10">
                    <Link href="#home" className="uppercase text-xl font-roboto font-normal">
                        <Image 
                            src={'../../public/linkedin-mark.svg'}
                            width={100}
                            height={100}
                            alt="LinkedIn Logo"
                        />

                    </Link>
                    <Link href="#about" className="uppercase text-xl font-roboto font-normal">About</Link>
                </div>
            </div>
        </nav>    
    )
}
export default FooterComponent