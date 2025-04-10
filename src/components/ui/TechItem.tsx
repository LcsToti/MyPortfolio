type Props = {
  title: string;
  img: string;
};

export default function TechItem({ title, img }: Props) {
  return (
    <div
      className="h-[50px] flex items-center justify-around 
    gap-2 py-2 px-4 border-[2px] border-transparent 
    bg-neutral-300 dark:bg-neutral-700 dark:text-white 
    rounded-full cursor-default hover:border-neutral-500
    transition-all duration-200"
    >
      <img src={img} className="h-[100%]" />
      <p>{title}</p>
    </div>
  );
}
