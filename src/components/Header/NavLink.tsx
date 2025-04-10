type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: Props) {
  return (
    <li>
      <a
        className="text-neutral-800 dark:text-neutral-200 text-xl 
        hover:bg-neutral-300 dark:hover:bg-neutral-600 p-[10px] 
        rounded-lg transition-all duration-300 ease-in-out"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
