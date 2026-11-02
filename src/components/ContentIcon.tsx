import { Code2, Monitor, Smartphone, Network, CircleCheck, Globe, Database, RefreshCw, MessageSquare, Rocket, Plug, Users, BriefcaseBusiness, GraduationCap, Languages, ClipboardList, Puzzle, Trophy, Mail } from "lucide-react";

const brandAssets: Record<string, string> = {
  "C#": "csharp", ".NET / ASP.NET Core": "dotnetcore", ".NET": "dotnetcore", "ASP.NET Core": "dotnetcore",
  "Entity Framework Core": "entityframeworkcore", React: "react",
  "React Native": "react", "Context API": "react", TypeScript: "typescript",
  "Next.js": "nextjs", "Redux Toolkit": "redux", Expo: "expo", SQLite: "sqlite",
  HTML: "html5", CSS: "css3", JavaScript: "javascript", Razor: "dotnetcore",
  Bootstrap: "bootstrap", "Tailwind CSS": "tailwindcss", PostgreSQL: "postgresql",
  MySQL: "mysql", MongoDB: "mongodb", "MongoDB.Driver": "mongodb",
  "Node.js": "nodejs", RabbitMQ: "rabbitmq", Redis: "redis", Docker: "docker",
  "Docker Compose": "docker", Linux: "linux", "Oracle Cloud": "oracle",
  "Nginx Proxy Manager": "nginx", Cloudflare: "cloudflare",
  "Cloudflare R2": "cloudflare", "GitHub Actions": "githubactions",
  "Microsoft Azure": "azure", "AWS S3": "amazonwebservices", Git: "git",
  GitHub: "github", LinkedIn: "linkedin", Gemini: "gemini", Codex: "codex", MCP: "mcp",
  ChatGPT: "openai", Claude: "claude", Obsidian: "obsidian",
  "GitHub Spec Kit": "github",
};

const toolSymbols: Record<string, typeof Code2> = {
  "shadcn/ui": Code2,
};

export function BrandIcon({ name }: { name: string }) {
  const asset = name === "Orca IDE" ? "orca" : brandAssets[name];
  if (!asset) {
    const Symbol = toolSymbols[name];
    return Symbol ? <Symbol className="brand-icon tool-symbol" size={22} strokeWidth={1.7} aria-hidden="true" /> : null;
  }
  return (
    <img
      className={`brand-icon brand-icon--${asset}`}
      src={asset === "orca" ? "/images/orca-ide.png" : `/icons/brands/${asset}.svg`}
      width="22"
      height="22"
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
    />
  );
}

const conceptAssets = {
  backend: Code2, frontend: Monitor, mobile: Smartphone,
  architecture: Network, testing: CircleCheck, web: Globe,
  databases: Database, migrations: RefreshCw, messaging: MessageSquare,
  deployment: Rocket, integrations: Plug, collaboration: Users,
  experience: BriefcaseBusiness, education: GraduationCap, languages: Languages,
  context: ClipboardList, contributions: Users, solution: Puzzle,
  results: Trophy, email: Mail,
};

export type Concept = keyof typeof conceptAssets;

export function ConceptIcon({ name }: { name: Concept }) {
  const Icon = conceptAssets[name];
  return <Icon className={`concept-icon concept-icon--${name}`} size={18} strokeWidth={1.7} aria-hidden="true" />;
}

export function TechnologyNames({ names }: { names: string[] }) {
  return (
    <ul className="technology-names">
      {names.map((name) => <li key={name}><BrandIcon name={name} /><span>{name}</span></li>)}
    </ul>
  );
}
