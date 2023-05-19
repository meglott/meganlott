import { UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

function HeaderComponent() {    
    return (  
        <nav className="sticky h-24 top-0 left-0 w-full bg-white border-b border-light-gray">
            <div className="flex w-full h-full py-5 px-10 justify-between items-center">
                <Link href="#home">
                    <div className="flex items-center pl-10 gap-5">
                        <Image
                            src={"/headshot.png"}
                            height={60}
                            width={60}
                            alt="Headshot of Megan Lott"
                        />
                        <p className="uppercase text-xl font-roboto font-normal">Megan Lott</p>
                    </div>
                </Link>
                <div className="flex flex-row justify-end items-center pr-10 gap-10">
                    <Link href="#home" className="uppercase text-xl font-roboto font-normal">
                        <div className='flex items-center h-12 hover:border-b-4 hover:border-button hover:mb-[-4px]'>
                            Home
                        </div>
                    </Link>
                    <Link href="#about" className="uppercase text-xl font-roboto font-normal">
                        <div className='flex items-center h-12 hover:border-b-4 hover:border-button hover:mb-[-4px]'>
                            About
                        </div>
                    </Link>
                    <Link href="#projects" className="uppercase text-xl font-roboto font-normal">
                        <div className='flex items-center h-12 hover:border-b-4 hover:border-button hover:mb-[-4px]'>
                            Projects
                        </div>
                    </Link>
                    <Link href="#contact-page" className="uppercase text-xl font-roboto font-normal">
                        <div className='flex items-center h-12 hover:border-b-4 hover:border-button hover:mb-[-4px]'>
                            Contact
                        </div>
                    </Link>
                </div>
            </div>
        </nav>    
    )
}
export default HeaderComponent