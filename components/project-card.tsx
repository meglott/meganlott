import Image from "next/image"
import Link from "next/link"

type ProjectCardProps = {
    imageSrc: string,
    imageAlt: string,
    link: string,
    title: string,
    subtitle: string,
    description: string,
    attributes: Array<string>
}

function ProjectCard({imageSrc, imageAlt, link, title, subtitle, description, attributes}: ProjectCardProps) {    
    return (  
        <div role="project-card" className="max-w-md w-full rounded-xl overflow-hidden shadow-lg">
            <Link href={link}  rel="noopener noreferrer" target="_blank">
                <div className={`flex ${title === "HomeTeam" ? 'mx-8' : 'm-2'} h-64 w-fit`}>
                    <Image height={250} width={500} src={imageSrc} alt={imageAlt} />
                </div>
            </Link>
            <div className="px-6 py-2 md:py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                    <p className="text-gray-500 text-xs md:text-sm font-normal italic">{subtitle}</p>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-2 pb-2">
                {attributes.map((attr: string, index: number) => (
                    <span key={index} className="inline-block bg-light-gray rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-black mr-2 mb-2">{attr}</span>
                ))}
            </div>
        </div>
    )
}
export default ProjectCard