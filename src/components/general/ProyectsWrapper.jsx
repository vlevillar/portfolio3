import { info } from "../../data/info";
import ProyectsCard from "./ProyectsCard";


export default function ProyectsWrapper({ projects }) {
    return (
        <div class="grid md:grid-cols-2 grid-cols-1 gap-4 my-16">
            {projects.map((project) => <ProyectsCard projectDetail={project} />)}
        </div>
    )
}