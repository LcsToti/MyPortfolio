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
          Sou <strong>Lucas Toti</strong>, Desenvolvedor e Engenheiro de Software
          com especialização em back-end <strong>.NET (C#)</strong> e na
          construção de arquiteturas de <strong>microsserviços</strong> complexas.
        </p>
        <br />
        <p>
          Minha expertise está em desenhar e implementar sistemas robustos e
          escaláveis, aplicando ativamente princípios como{' '}
          <strong>Clean Architecture</strong>,{' '}
          <strong>Domain-Driven Design (DDD)</strong>, <strong>CQRS</strong> e{' '}
          <strong>SOLID</strong>. Tenho experiência prática liderando o design
          de arquiteturas orientadas a eventos (EDA) e orquestrando a
          comunicação entre serviços com <strong>RabbitMQ</strong> e{' '}
          <strong>MassTransit</strong>.
        </p>
        <br />
        <p>
          Embora meu foco seja o back-end, sou um desenvolvedor full-stack
          proficiente. No front-end, construo interfaces modernas e responsivas
          com <strong>React</strong> e <strong>TypeScript</strong>, e desenvolvo
          aplicações mobile nativas utilizando <strong>React Native</strong> e{' '}
          <strong>Expo</strong>.
        </p>
        <br />
        <p>
          Minha experiência se estende à infraestrutura e DevOps, incluindo a
          orquestração de ambientes de desenvolvimento com{' '}
          <strong>Docker</strong> e <strong>Docker Compose</strong>,
          configuração de <strong>Nginx</strong> e a implementação de soluções
          em provedores de nuvem como <strong>AWS</strong> (EC2, S3, RDS),{' '}
          <strong>Azure</strong> e <strong>Oracle Cloud</strong>.
        </p>
        <br />
        <p>
          Atualmente, curso Análise e Desenvolvimento de Sistemas na PUC Minas e
          possuo <strong>inglês avançado (C2)</strong>, o que me permite
          consumir documentações técnicas e colaborar em contextos globais.
        </p>
      </div>
    </div>
  );
}
