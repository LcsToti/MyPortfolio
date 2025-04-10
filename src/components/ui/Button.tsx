import copyIcon from "@/assets/icons/copy.png";
import phoneIcon from "@/assets/icons/phone.png";
import downloadIcon from "@/assets/icons/download.png";
import linkIcon from "@/assets/icons/external-link.svg";
import fileDownloadIcon from "@/assets/icons/file-download.png";

type Props = {
  iconSrc: "copy" | "phone" | "download" | "filedownload" | "link";
  text: string;
  handleOnClick?: () => void;
  onCopy?: (text: string) => Promise<boolean>;
  textToCopy?: string;
};

export default function Button({
  iconSrc,
  text,
  handleOnClick,
  onCopy,
  textToCopy,
}: Props) {
  const iconSrcMap = {
    copy: copyIcon,
    phone: phoneIcon,
    download: downloadIcon,
    filedownload: fileDownloadIcon,
    link: linkIcon,
  };
  const handleClick = async () => {
    if (handleOnClick) {
      handleOnClick();
    } else if (onCopy && textToCopy) {
      const success = await onCopy(textToCopy);
      if (success) {
        alert("Texto copiado com sucesso!");
      }
    }
  };
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
      onClick={handleClick}
    >
      <div className="w-5">
        <img
          src={iconSrcMap[iconSrc]}
          width="100%"
          height="100%"
          className="dark:invert-100"
        />
      </div>
      {text}
    </button>
  );
}
