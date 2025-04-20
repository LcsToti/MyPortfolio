import type { ProjectItem } from "@/types/ProjectItemTypes";
import Link from "@/components/ui/Link";
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
    transition-all duration-200 hover:translate-y-[-4px] cursor-default"
    >
      <div className="overflow-hidden rounded-xl w-[260px] h-[135px]">
        {imgs.map((img) => (
          <img src={img} key={imgs.indexOf(img)} className="h-full w-full" />
        ))}
      </div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="h-[70px]">{description}</div>
      <div className="h-[50px] text-neutral-400">{stack}</div>
      <div className="flex flex-col gap-3 justify-end h-[95px]">
        <Link title="Repositorio" img={githubIcon} link={gitRepo} />
        {access && <Link title="Acessar" img={linkIcon} link={access} />}
      </div>
    </div>
  );
}
