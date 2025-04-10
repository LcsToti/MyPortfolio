import { useState } from "react";
import { StackType } from "../../types/StackItemTypes";
import StackFilter from "../Stack/StackFilter";
import StackList from "../Stack/StackList";

export default function StackSection() {
  const [selectedType, setSelectedType] = useState<StackType | null>("default");

  return (
    <section
      id="skills"
      className="py-20 flex flex-col justify-center items-center gap-5 px-8 md:px-12 lg:px-24 xl:px-48 2xl:px-60"
    >
      <span className="text-3xl text-neutral-800 dark:text-neutral-200">
        SKILLS
      </span>
      <span className="text-sm text-neutral-500">
        Você pode trocar o filtro abaixo para ver outras skills.
      </span>
      <StackFilter onSelectType={setSelectedType} selectedType={selectedType} />
      <StackList selectedType={selectedType} />
    </section>
  );
}
