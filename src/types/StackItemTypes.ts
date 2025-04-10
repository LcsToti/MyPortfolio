export const STACK_TYPES = [
  "default",
  "language",
  "framework",
  "frontend",
  "backend",
  "mobile",
  "database",
  "devops",
] as const;

export type StackType = (typeof STACK_TYPES)[number];

export const STACK_TYPE_LABELS: Record<StackType, string> = {
  default: "Principais",
  language: "Linguagem",
  framework: "Framework e Biblioteca",
  frontend: "Front-end",
  backend: "Back-end",
  mobile: "Mobile",
  database: "Banco de Dados",
  devops: "DevOps",
};

export type StackItem = {
  id?: string;
  title: string;
  description: string;
  image: string;
  type: StackType[];
  link: string;
};
