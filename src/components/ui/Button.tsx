type Props = {
  iconSrc: string;
  text: string;
  handleOnClick?: () => void;
};

export default function Button({ iconSrc, text, handleOnClick }: Props) {
  return (
    <button
      className="
    flex items-center justify-center gap-2 
    px-4 py-3 
    border border-neutral-300 dark:border-neutral-700 
    rounded-md 
    bg-neutral-200 dark:bg-neutral-800 
    text-black dark:text-white 
    hover:bg-neutral-300 dark:hover:bg-neutral-700 
    hover:border-neutral-600 dark:hover:border-neutral-400 
    hover:shadow-lg transition-colors duration-300 cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="w-5">
        <img
          src={iconSrc}
          width="100%"
          height="100%"
          className="dark:invert-100"
        />
      </div>
      {text}
    </button>
  );
}
