type Props = {
  title: string;
  img: string;
  link: string;
};

export default function Link({ title, img, link }: Props) {
  return (
    <a
      title={title}
      href={link}
      target="_blank"
      className={`flex justify-center items-center gap-3 h-[30px] p-5
        hover:border-neutral-600 dark:hover:border-neutral-400
        rounded-xl 
        ${
          title === "Acessar"
            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
            : "bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600"
        }
        transition-all`}
    >
      <p className="dark:text-white">{title}</p>
      <img
        src={img}
        className={
          title === "Acessar"
            ? "h-[20px] invert"
            : "h-[20px] invert-0 dark:invert"
        }
      />
    </a>
  );
}
