import type { ImageAsset, LocalizedText } from "./portfolio";

export interface Certificate {
  id: string;
  kind: "academic" | "language" | "course";
  projectId: string | null;
  title: LocalizedText;
  issuer: string;
  logo: ImageAsset | null;
  period: LocalizedText;
  description: LocalizedText;
  file: string;
  preview: ImageAsset;
  verificationUrl: string | null;
}

const pucLogo = { src: "/images/puc-minas-black.png", width: 1199, height: 1018 };
export const efSetLogo = { src: "/images/ef-set-logo.png", width: 500, height: 500 };

export const certificates: Certificate[] = [
  {
    id: "comply-award", kind: "academic", projectId: "comply",
    title: { pt: "Comply — Projeto Destaque", en: "Comply — Outstanding Project" },
    issuer: "PUC Minas", logo: pucLogo,
    period: { pt: "2º semestre de 2025", en: "Second semester of 2025" },
    description: {
      pt: "Reconhecimento do projeto desenvolvido em equipe como Destaque do Eixo 4 do curso de Análise e Desenvolvimento de Sistemas, pelo desempenho, dedicação e compromisso demonstrados.",
      en: "Recognition of the team project as an outstanding project in Axis 4 of the Systems Analysis and Development program, for performance, dedication, and commitment.",
    },
    file: "/certificates/Comply - Destaque Academico.pdf",
    preview: { src: "/certificates/previews/comply.png", width: 1600, height: 1132 },
    verificationUrl: null,
  },
  {
    id: "habitum-award", kind: "academic", projectId: "habitum",
    title: { pt: "Habitum — Projeto Destaque", en: "Habitum — Outstanding Project" },
    issuer: "PUC Minas", logo: pucLogo,
    period: { pt: "1º semestre de 2025", en: "First semester of 2025" },
    description: {
      pt: "Projeto em equipe reconhecido como Destaque do Eixo 3. Apresentado na Mostra de Projetos de Análise e Desenvolvimento de Sistemas em 8 de julho de 2025.",
      en: "Team project recognized as an outstanding project in Axis 3. Presented at the Systems Analysis and Development project exhibition on July 8, 2025.",
    },
    file: "/certificates/Habitum - Destaque Academico.pdf",
    preview: { src: "/certificates/previews/habitum.png", width: 1600, height: 1132 },
    verificationUrl: null,
  },
  {
    id: "prato-do-dia-award", kind: "academic", projectId: "prato-do-dia",
    title: { pt: "PratoDoDia — Projeto Destaque", en: "PratoDoDia — Outstanding Project" },
    issuer: "PUC Minas", logo: pucLogo,
    period: { pt: "2º semestre de 2024", en: "Second semester of 2024" },
    description: {
      pt: "Projeto em equipe reconhecido como Destaque do Eixo 2. O certificado registra a apresentação na Mostra de Projetos em 5 de maio de 2025.",
      en: "Team project recognized as an outstanding project in Axis 2. The certificate records its presentation at the project exhibition on May 5, 2025.",
    },
    file: "/certificates/Prato Do Dia - Destaque Academico.pdf",
    preview: { src: "/certificates/previews/prato-do-dia.png", width: 1600, height: 1132 },
    verificationUrl: null,
  },
  {
    id: "pc-certo-award", kind: "academic", projectId: "pc-certo",
    title: { pt: "PC Certo — Projeto Destaque", en: "PC Certo — Outstanding Project" },
    issuer: "PUC Minas", logo: pucLogo,
    period: { pt: "1º semestre de 2024", en: "First semester of 2024" },
    description: {
      pt: "Projeto em equipe reconhecido como Destaque do Eixo 1. Apresentado na Mostra de Projetos de Análise e Desenvolvimento de Sistemas em 1 e 2 de julho de 2024.",
      en: "Team project recognized as an outstanding project in Axis 1. Presented at the Systems Analysis and Development project exhibition on July 1–2, 2024.",
    },
    file: "/certificates/PC Certo - Destaque Academico.pdf",
    preview: { src: "/certificates/previews/pc-certo.png", width: 1600, height: 1132 },
    verificationUrl: null,
  },
  {
    id: "ef-set", kind: "language", projectId: null,
    title: { pt: "EF SET English Certificate — C2", en: "EF SET English Certificate — C2" },
    issuer: "EF SET", logo: efSetLogo,
    period: { pt: "28 de fevereiro de 2025", en: "February 28, 2025" },
    description: {
      pt: "Resultado de 72/100, equivalente ao nível C2 Proficient do CEFR. A avaliação deste certificado abrange leitura e compreensão oral, com 72 pontos em cada habilidade.",
      en: "A score of 72/100, equivalent to CEFR C2 Proficient. This certificate assesses reading and listening, with 72 points in each skill.",
    },
    file: "/certificates/EF SET Certificate.pdf",
    preview: { src: "/certificates/previews/ef-set.png", width: 1600, height: 2264 },
    verificationUrl: "https://cert.efset.org/qGaWj2",
  },
  {
    id: "dsa-galeog", kind: "course", projectId: null,
    title: { pt: "Estrutura de Dados e Algoritmos", en: "Data Structures and Algorithms" },
    issuer: "Augusto Galego · Hubla", logo: null,
    period: { pt: "27 de agosto de 2026", en: "August 27, 2026" },
    description: {
      pt: "Conclusão do curso livre de Estrutura de Dados e Algoritmos, ministrado por Augusto Galego, realizado online pela plataforma Hubla, com carga horária de 8 horas.",
      en: "Completion of the 8-hour Data Structures and Algorithms course taught by Augusto Galego, delivered online through Hubla.",
    },
    file: "/certificates/Certificado DSA Galeog.pdf",
    preview: { src: "/certificates/previews/dsa-galeog.png", width: 1600, height: 1132 },
    verificationUrl: null,
  },
];
