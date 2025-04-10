import ThemeSwitch from "@/components/index/Header/ThemeSwitch";

type Props = {
  navState: boolean;
  toggleNav: () => void;
};

export default function SideBar({ navState, toggleNav }: Props) {
  return (
    <div
      className={
        navState
          ? "fixed md:hidden top-0 left-0 h-full w-full z-[999] bg-neutral-700/20  transition-all duration-300 flex flex-row-reverse"
          : "fixed md:hidden top-0 left-0 h-full w-full z-[-999] bg-neutral-700/0  transition-all duration-300 flex flex-row-reverse"
      }
      onClick={toggleNav}
    >
      <div
        className={
          navState
            ? "bg-neutral-100 dark:bg-neutral-800 p-10 translate-x-0 shadow-lg transition-all duration-300 min-w-[250px] flex flex-col gap-4"
            : "bg-neutral-100 dark:bg-neutral-800 p-10 translate-x-[100%] shadow-lg transition-all duration-300 min-w-[250px] flex flex-col gap-4"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <a
          onClick={toggleNav}
          href="#hero"
          className="text-neutral-800 dark:text-neutral-100 hover:underline transition-colors duration-200"
        >
          Início
        </a>
        <a
          onClick={toggleNav}
          href="#projects"
          className="text-neutral-800 dark:text-neutral-100 hover:underline transition-colors duration-200"
        >
          Projetos
        </a>
        <a
          onClick={toggleNav}
          href="#skills"
          className="text-neutral-800 dark:text-neutral-100 hover:underline transition-colors duration-200"
        >
          Skills
        </a>
        <a
          onClick={toggleNav}
          href="#about"
          className="text-neutral-800 dark:text-neutral-100 hover:underline transition-colors duration-200"
        >
          Sobre
        </a>
        <a
          onClick={toggleNav}
          href="#contact"
          className="text-neutral-800 dark:text-neutral-100 hover:underline transition-colors duration-200"
        >
          Contato
        </a>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
