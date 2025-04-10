import type { StackItem } from "../../types/StackItemTypes";

export default function StackItem({
  title,
  description,
  image,
  type,
  link,
}: StackItem) {
  return (
    <a
      className="group
    flex flex-col justify-center items-center gap-3 rounded-lg p-3
    transition-all duration-300 cursor-pointer 
    hover:grayscale-0 md:grayscale-65
    bg-transparent dark:hover:bg-white/5 hover:bg-black/5
    text-gray-900 dark:text-white
    hover:font-bold hover:tracking-widest
  "
      style={{ width: "120px", height: "120px" }}
      title={description}
      data-type={type}
      href={link}
      target="_blank"
    >
      <div
        className="flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out"
        style={{ width: "60px", height: "auto" }}
      >
        <img
          src={image}
          className="w-full h-full scale-90 transition-all duration-300 ease-in-out"
          alt={title}
        />
      </div>
      <div className="subTitle">{title}</div>
    </a>
  );
}
