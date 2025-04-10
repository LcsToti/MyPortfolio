import SideBarIcon from "@/assets/icons/sidebar.png";

type Props = {
  toggleNav: () => void;
};

export default function SideBarSwitchFixed({ toggleNav }: Props) {
  return (
    <>
      <button
        className="fixed top-3 right-3 z-50
        shadow-md shadow-black/50
        w-10 p-2 rounded-xl cursor-pointer 
        grayscale hover:grayscale-0 
        bg-neutral-100 dark:bg-neutral-800
        transition-all duration-300 ease-in-out md:hidden
        "
        onClick={toggleNav}
      >
        <img src={SideBarIcon} />
      </button>
    </>
  );
}
