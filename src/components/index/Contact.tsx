import copyIcon from "@/assets/icons/copy.svg";
import checkIcon from "@/assets/icons/check.png";
import linkedin from "@/assets/icons/linkedin.png";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Contact() {
  const [buttonState, setButtonState] = useState({
    iconSrc: copyIcon,
    text: "Copiar Email",
    coloredIcon: false,
  });

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
      className="py-20 px-4 w-full max-w-xl mx-auto text-neutral-800"
      id="contact"
    >
      <h2 className="text-3xl mb-6 text-center dark:text-white">CONTATO</h2>

      <h3 className="text-lg text-center dark:text-neutral-300 py-5 font-light">
        {" "}
        Caso tenha interesse, você pode me mandar um <strong>email </strong>
        por aqui, ou entre em contato pelo meu <strong>linkedin</strong> !
      </h3>
      <div className="flex gap-3 flex-wrap justify-center items-center">
        <Button
          iconSrc={buttonState.iconSrc}
          text={buttonState.text}
          handleOnClick={copyToClipboard}
          coloredIcon={buttonState.coloredIcon}
        />
        <Button
          iconSrc={linkedin}
          text="Linkedin"
          handleOnClick={() =>
            window.open(
              "https://www.linkedin.com/in/lcstoti",
              "_blank",
              "noopener,noreferrer"
            )
          }
          coloredIcon
        />
      </div>
    </section>
  );
}
