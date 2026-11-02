import type { LocalizedText } from "./portfolio";

interface AIToolGroup {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  technologies: string[];
}

export const aiToolGroups: AIToolGroup[] = [
  {
    id: "assistants",
    title: { pt: "Assistentes e agentes", en: "Assistants and agents" },
    description: {
      pt: "Codex, ChatGPT e Claude no planejamento, implementação e revisão. Orca IDE na divisão de tarefas e coordenação de agentes.",
      en: "Codex, ChatGPT, and Claude for planning, implementation, and review. Orca IDE for splitting tasks and coordinating agents.",
    },
    technologies: ["Codex", "ChatGPT", "Claude", "Orca IDE"],
  },
  {
    id: "integrations",
    title: { pt: "Ferramentas conectadas", en: "Connected tools" },
    description: {
      pt: "MCP conecta os assistentes a ferramentas e informações do projeto. Também utilizo essa integração com shadcn/ui, uma coleção de componentes de interface.",
      en: "MCP connects assistants to tools and project information. I also use this integration with shadcn/ui, a collection of interface components.",
    },
    technologies: ["MCP", "shadcn/ui"],
  },
  {
    id: "context",
    title: { pt: "Especificações e contexto", en: "Specifications and context" },
    description: {
      pt: "GitHub Spec Kit para organizar requisitos e planos de implementação; Obsidian para registrar documentação e contexto dos projetos. Estruturo as instruções dadas à IA para orientar o trabalho.",
      en: "GitHub Spec Kit to organize requirements and implementation plans; Obsidian to record documentation and project context. I structure the instructions given to AI to guide the work.",
    },
    technologies: ["GitHub Spec Kit", "Obsidian"],
  },
];
