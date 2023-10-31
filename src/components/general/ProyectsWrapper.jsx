import Link from "next/link";
import { info } from "../../data/info";
import ProyectsCard from "./ProyectsCard";
import { useRouter } from "next/router";


export default function ProyectsWrapper({ projects, currentLanguage }) {
    const router = useRouter()

    function languageSwitch(spanish, english) {
        return currentLanguage === "ESP" ? spanish : english;
    }

    return (
        <>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 my-16">
                {projects.map((project, key) => <ProyectsCard key={key} projectDetail={project} />)}
            </div>
            {router.pathname !== '/projects' && (
            <Link href='/projects'>
                <button className={`p-[10px] mb-2 cursor-pointer rounded-md bg-light text-dark dark:bg-dark dark:text-light border-[0.5px] border-dark dark:border-light w-full hover:bg-gray dark:hover:bg-dark-gray transition-colors duration-200 ease-in py-4`}>{languageSwitch('Ver mas', 'See more')}</button>
            </Link>
            )}
        </>
    )
}