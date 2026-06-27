import ThemeSwitch from "./ThemeSwitch";
import SideBarSwitch from "./SideBarSwitch";
import NavLink from "./NavLink";
import newLogo from '@/assets/lt-icon.svg';
import Container from "../../Container";

type Props = {
  toggleNav: () => void;
};

export default function Header({ toggleNav }: Props) {
  return (
    <header className="flex bg-neutral-100 dark:bg-neutral-900 py-4 border-b-[1px] border-neutral-300 dark:border-neutral-800">
      <Container>
        <nav className="flex items-center gap:2 md:gap-5 py-[10px] px-[2%] w-full ">
          <a
            href="#"
            className="text-[30px] font-[400] text-black dark:text-white flex flex-row gap-2"
          >
            <img src={newLogo} alt="Lucas" width={32} height={32} />
            Toti
          </a>
          <span className="flex-1"></span>
          <ThemeSwitch />
          <SideBarSwitch toggleNav={toggleNav} />
          <ul className="hidden md:flex gap-[10px] m-0 p-0 list-none">
            <NavLink href="#projects">Projetos</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#about">Sobre </NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
