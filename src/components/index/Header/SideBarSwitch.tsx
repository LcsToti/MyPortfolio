import SideBarIcon from "@/assets/icons/sidebar.png";

type Props = {
  toggleNav: () => void;
};

export default function SideBarSwitch({ toggleNav }: Props) {
  return (
    <>
      <button
        className="w-10 p-2 rounded-lg cursor-pointer 
        grayscale hover:grayscale-0 
        hover:bg-neutral-300 dark:hover:bg-neutral-600
        transition-all duration-300 ease-in-out md:hidden
        "
        onClick={toggleNav}
      >
        <img src={SideBarIcon} />
      </button>
    </>
  );
}
