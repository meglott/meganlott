import Image from "next/image"

type ProjectCardProps = {
    imageSrc: string,
    imageAlt: string,
    title: string,
    subtitle: string,
    description: string,
    attributes: Array<string>
}

function ProjectCard({imageSrc, imageAlt, title, subtitle, description, attributes}: ProjectCardProps) {    
    return (  
        <div role="project-card" className="max-w-sm w-full rounded-xl overflow-hidden shadow-lg">
            <Image height={250} width={500} src={imageSrc} alt={imageAlt} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                    <p className="text-gray-500 text-sm font-normal italic">{subtitle}</p>
                </div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {attributes.map((attr: string, index: number) => (
                    <span key={index} className="inline-block bg-light-gray rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">{attr}</span>
                ))}
            </div>
        </div>
    )
}
export default ProjectCard