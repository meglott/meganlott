export default function DrawerMenu() {
    return (
        <div
            id="mobile-menu" 
            role="mobile-menu"
            className="absolute inset-y-0 left-0 z-40 transform -translate-x-full transition duration-200 ease-in-out bg-white text-black w-4/5 md:w-2/5 lg:hidden border-r border-r-light-gray"
        >
            This is the mobile menu
        </div>
    );
}