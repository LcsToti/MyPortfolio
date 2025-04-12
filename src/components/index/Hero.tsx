import copyIcon from "@/assets/icons/copy.png";
import checkIcon from "@/assets/icons/check.png";
import phoneIcon from "@/assets/icons/phone.png";
import fileDownloadIcon from "@/assets/icons/file-download.png";
import githubIcon from "@/assets/icons/github.png";
import linkedinIcon from "@/assets/icons/linkedin.png";

import Button from "@/components/ui/Button";
import TechItem from "@/components/ui/TechItem";
import SocialLink from "@/components/ui/SocialLink";
import WaveImg from "@/assets/wave.png";
import WaveImgDM from "@/assets/wave-dm.png";
import { useState } from "react";

function goToContact() {
  window.location.href = "#contact";
}
export default function Hero() {
  const [buttonState, setButtonState] = useState({
    iconSrc: copyIcon,
    text: "Copiar Email",
    coloredIcon: false,
  });

  const downloadCurriculum = () => {
    // const link = document.createElement("a");
    // link.href = curriculum;
    // link.download = "curriculum.pdf";
    // link.click();
    window.open("/curriculum.pdf", "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("lucastotidev@gmail.com");

    setButtonState({
      iconSrc: checkIcon,
      text: "Copiado!",
      coloredIcon: true,
    });
    setTimeout(() => {
      setButtonState({
        iconSrc: copyIcon,
        text: "Copiar Email",
        coloredIcon: false,
      });
    }, 2000);
  };

  return (
    <section
      className="py-10 md:py-20 bg-gradient-to-tr
      from-neutral-100 dark:from-neutral-900  
      via-neutral-100 dark:via-neutral-900
     to-slate-300 dark:to-slate-900
      px-8 md:px-12 lg:px-24 xl:px-48 2xl:px-[15%]
      relative flex flex-col justify-center"
      id="hero"
    >
      <img
        className="hidden dark:md:hidden md:flex absolute bottom-[-5px] right-0 z-0 max-h-[425px] md:max-h-[560px] "
        src={WaveImg}
      />
      <img
        className="hidden dark:md:flex md:shown absolute bottom-[-5px] right-0 z-0 max-h-[425px] md:max-h-[560px] "
        src={WaveImgDM}
      />
      <main className="flex flex-col items-center md:items-start gap-10 md:gap-15 text-center md:text-start z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white">
          Olá! <span>👋</span>
          <br />
          Sou{" "}
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">
            Lucas Toti
          </span>
          .
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-500 ">
          Desenvolvedor{" "}
          <span
            className="font-[Source_Code_Pro] font-bold bg-neutral-200 
            rounded-xl px-2 py-1 dark:bg-neutral-800 whitespace-nowrap"
          >
            &lt;Full-Stack/&gt;
          </span>
        </h2>
        <div className="flex gap-3 justify-center items-center flex-wrap max-w-[400px]">
          <TechItem
            title="React"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
          <TechItem
            title=".NET"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
          />
          <TechItem
            title="Expo"
            img="https://www.svgrepo.com/show/306022/expo.svg"
          />
          <TechItem
            title="Azure"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
          />
          <TechItem
            title="Git"
            img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          />
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center md:items-start md:justify-start">
          <Button
            iconSrc={buttonState.iconSrc}
            text={buttonState.text}
            handleOnClick={copyToClipboard}
            coloredIcon={buttonState.coloredIcon}
          />
          <Button
            iconSrc={fileDownloadIcon}
            text="Baixar Currículo"
            handleOnClick={downloadCurriculum}
          />
          <Button
            iconSrc={phoneIcon}
            text="Contato"
            handleOnClick={goToContact}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-medium text-neutral-700 dark:text-neutral-300">
            {" "}
            Meus Links:
          </h3>
          <div className="flex gap-5">
            <SocialLink
              link="https://github.com/Lcstoti"
              img={githubIcon}
              title="GitHub"
            />
            <SocialLink
              link="https://linkedin.com/in/Lcstoti"
              img={linkedinIcon}
              title="LinkedIn"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
