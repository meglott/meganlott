import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

function HeaderComponent() {    
    return (  
        <nav className="sticky h-24 top-0 left-0 w-full bg-white border-b border-light-gray">
            <div className="flex w-full h-full py-5 px-5 md:px-10 justify-between items-center">
                {/* Large screens: photo and name in same div */}
                <Link href="#home" className='hidden lg:flex'>
                    <div className="hidden lg:flex lg:items-center lg:pl-10 lg:gap-5">
                        {/* Headshot */}
                        <Image
                            src={"/headshot.png"}
                            height={60}
                            width={60}
                            alt="Headshot of Megan Lott"
                        />
                        {/* Name */}
                        <p className="uppercase text-xl font-roboto font-normal">Megan Lott</p>
                    </div>
                </Link>
                {/* Small screens: phone and name separate */}
                <div className='visible lg:hidden'>
                    <Image
                        src={"/headshot.png"}
                        height={60}
                        width={60}
                        alt="Headshot of Megan Lott"
                    />
                </div>
                <div className='visible lg:hidden'>
                    <p className="uppercase text-xl font-roboto font-normal">Megan Lott</p>
                </div>
                {/* Links */}
                <div className="hidden lg:visible lg:flex lg:flex-row lg:justify-end lg:items-center lg:pr-10 lg:gap-10">
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
                <div className="visible h-9 w-9 pr-10 gap-10 lg:hidden">
                    <Bars3Icon fill='black' height={36} width={36} />
                </div>
            </div>
        </nav>    
    )
}
export default HeaderComponent