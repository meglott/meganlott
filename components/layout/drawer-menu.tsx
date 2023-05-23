import Link from "next/link";

export default function DrawerMenu() {

    const showNav = () => {
        let menu = document.getElementById("mobile-menu");
        menu?.classList.toggle('-translate-x-full');
    }

    return (
        <div
            id="mobile-menu" 
            role="mobile-menu"
            className="absolute inset-y-0 left-0 z-40 transform -translate-x-full transition duration-200 ease-in-out bg-white text-black w-4/5 md:w-2/5 h-full max-h-screen lg:hidden border-r border-r-light-gray"
        >
            <div className="flex flex-col">
                <Link href="#home" onClick={showNav}>
                    <div className="flex h-20 border-b border-light-gray uppercase text-xl font-roboto font-normal items-center justify-center">
                        Home
                    </div>
                </Link>
                <Link href="#about" onClick={showNav}>
                    <div className="flex h-20 border-b border-light-gray uppercase text-xl font-roboto font-normal items-center justify-center">
                        About
                    </div>
                </Link>
                <Link href="#projects" onClick={showNav}>
                    <div className="flex h-20 border-b border-light-gray uppercase text-xl font-roboto font-normal items-center justify-center">
                        Projects
                    </div>
                </Link>
                <Link href="#contact-page" onClick={showNav}>
                    <div className="flex h-20 border-b border-light-gray uppercase text-xl font-roboto font-normal items-center justify-center">
                        Contact
                    </div>
                </Link>
            </div>
        </div>
    );
}