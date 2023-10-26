import Image from "next/image";
import { info } from "../../data/info";
import Link from "next/link";


export default function ProyectsCard({ projectDetail }) {
    const githubUrl = projectDetail.githubUrl
    const liveUrl = projectDetail.liveUrl
    const thumbnail = projectDetail.thumbnail
    const title = projectDetail.title
    const tags = projectDetail.tags
    const id = projectDetail.id
    console.log(id);

    return (
        <article class="w-full max-h-[18rem] overflow-hidden relative group">
            <div class="flex items-center absolute right-4 top-4 z-10">
                {
                    githubUrl && (
                        <a
                            href={githubUrl}
                            class="text-white p-3 bg-black/50 rounded-full backdrop-blur-md"
                            aria-label="Social Media"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-github"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </a>
                    )
                }

                {
                    liveUrl && (
                        <a
                            href={liveUrl}
                            class="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
                            aria-label="Social Media"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-link-2"
                            >
                                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                                <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                        </a>
                    )
                }
            </div>
            <Link href={`/projects/${id}`}>
                <Image
                    src={thumbnail}
                    class="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]"
                    loading="lazy"
                    width='500'
                    height="500"
                    alt="featureImage"
                />
            </Link>
            <div
                class="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700"
            >
                <div className="flex pb-1">
                    {tags.map((tag, index) => (
                        <div key={index} className="mr-2 p-2 border-solid border-2 border-[#bababa] rounded-md text-xs text-[#bababa]" style={{ display: 'inline-block' }}>{tag}</div>
                    ))}
                </div>
                <h3 class="mr-2 text-xl">{title}</h3>
            </div>
        </article>
    )
}