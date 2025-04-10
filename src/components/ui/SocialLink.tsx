type Props = {
  title: string;
  img: string;
  link: string;
};

export default function SocialLink({ title, img, link }: Props) {
  return (
    <a
      title={title}
      href={link}
      target="_blank"
      className="flex justify-center items-center gap-3 h-[50px] p-[8px] 
      border-[1px] border-neutral-200 dark:border-neutral-800
       hover:border-neutral-600 dark:hover:border-neutral-400
      rounded-xl bg-neutral-100 dark:bg-neutral-800
       hover:bg-neutral-300 dark:hover:bg-neutral-700
      transition-all"
    >
      <img
        src={img}
        className={title === "GitHub" ? "h-[100%] dark:invert" : "h-[100%]"}
      />
      <p className="dark:text-white">{title}</p>
    </a>
  );
}
