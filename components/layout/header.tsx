import { UserCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function HeaderComponent() {    
    return (  
        <nav className="sticky h-24 top-0 left-0 w-full bg-white border-b border-light-gray">
            <div className="flex w-full h-full py-5 px-10 justify-between items-center">
                <div className="flex items-center pl-10 gap-5">
                    <UserCircleIcon className="h-14 w-14" />
                    <p className="uppercase text-xl font-roboto font-normal">Megan Lott</p>
                </div>
                <div className="flex justify-end items-center pr-10 gap-10">
                    <Link href="#home" className="uppercase text-xl font-roboto font-normal">Home</Link>
                    <Link href="#about" className="uppercase text-xl font-roboto font-normal">About</Link>
                    <Link href="#projects" className="uppercase text-xl font-roboto font-normal">Projects</Link>
                    <Link href="#contact-page" className="uppercase text-xl font-roboto font-normal">Contact</Link>
                </div>
            </div>
        </nav>    
    )
}
export default HeaderComponent