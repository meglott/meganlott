import { UserCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function ProjectCard() {    
    return (  
        <div role="project-card-1" className="max-w-sm w-full rounded-xl overflow-hidden shadow-lg">
            <img className="w-full" src="/splash-screen.png" alt="meganlott.com" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">meganlott.com</div>
                <p className="text-gray-700 text-base">
                This is it! This portfolio site was designed and built by yours truly.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-light-gray rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">TypeScript</span>
                <span className="inline-block bg-light-gray rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Next.js</span>
                <span className="inline-block bg-light-gray rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">Tailwind CSS</span>
            </div>
        </div>
    )
}
export default ProjectCard