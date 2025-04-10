import SideBarIcon from "@/assets/icons/sidebar.png";

export default function SideBarNav() {
  return (
    <>
      <button
        className="w-10 p-2 rounded-lg cursor-pointer 
      grayscale hover:grayscale-0 
     hover:bg-neutral-300 dark:hover:bg-neutral-600
      transition-all duration-300 ease-in-out md:hidden"
      >
        <img src={SideBarIcon} className="dark:invert-100" />
      </button>
    </>
  );
}
