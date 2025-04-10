import type { ProjectItem } from "@/types/ProjectItemTypes";
import Link from "../ui/Link";
import linkIcon from "@/assets/icons/external-link.svg";
import githubIcon from "@/assets/icons/github.png";

export default function ProjectCard({
  title,
  description,
  stack,
  imgs,
  gitRepo,
  access,
}: ProjectItem) {
  return (
    <div
      className="bg-white dark:bg-neutral-800 rounded-xl p-5 text-black dark:text-white w-[300px] flex flex-col gap-2 shadow-lg shadow-black/30 
    transition-all duration-200 hover:translate-y-[-2px] cursor-default"
    >
      <div className="h-max overflow-hidden rounded-lg">
        {imgs.map((img) => (
          <img src={img} key={imgs.indexOf(img)} />
        ))}
      </div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="min-h-[100px]">{description}</div>
      <div className="min-h-[60px] flex-1 text-neutral-400">{stack}</div>
      <div className="flex flex-col gap-3 justify-around h-[95px]">
        <Link title="Repositorio" img={githubIcon} link={gitRepo} />
        {access && <Link title="Acessar" img={linkIcon} link={access} />}
      </div>
    </div>
  );
}
