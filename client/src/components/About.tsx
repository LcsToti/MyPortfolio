import Me from "@/assets/LucasToti.jpg";

export default function About() {
  return (
    <div
      className="py-20 flex flex-col items-center justify-center gap-4 px-4 text-center bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
      id="about"
    >
      <h1 className="text-3xl">SOBRE MIM</h1>

      <div className="rounded-full w-70 h-70 overflow-hidden flex justify-center items-center my-10">
        <img src={Me} />
      </div>

      <div className="max-w-2xl text-base md:text-lg">
        <p>
          Sou desenvolvedor <strong>full-stack</strong>, trabalho com{" "}
          <strong>ASP.NET</strong> (Web API, MVC), <strong>React</strong> e{" "}
          <strong>React Native</strong>. Gosto de construir aplicações
          completas, do backend ao frontend, sempre seguindo boas práticas como{" "}
          <strong>REST</strong>, <strong>SOLID</strong> e <strong>DRY</strong>.
        </p>
        <br />
        <p>
          Tenho experiência com <strong>bancos SQL</strong>,{" "}
          <strong>Azure</strong> (e um pouco de AWS), além de versionamento com{" "}
          <strong>Git</strong> e <strong>GitHub</strong> (Gitflow).
        </p>
        <br />
        <p>
          Atualmente curso{" "}
          <strong>Análise e Desenvolvimento de Sistemas</strong> na{" "}
          <strong>PUC Minas</strong> (3º período). Lá participo de projetos em
          equipe do início ao fim — ideia, documentação, codificação, deploy e
          manutenção — sempre com metodologias ágeis como o{" "}
          <strong>SCRUM</strong>.
        </p>
      </div>
    </div>
  );
}
