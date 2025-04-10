import type { StackType } from "@/types/StackItemTypes";
import { myStack } from "@/data/my-stack";
import StackItem from "./StackItem";

type Props = {
  selectedType: StackType | null;
};

export default function StackList({ selectedType }: Props) {
  const filteredStack = selectedType
    ? myStack.filter((item) => item.type.includes(selectedType))
    : myStack;
  return (
    <div className="flex gap-4 flex-wrap items-center justify-center">
      {filteredStack.map((item) => (
        <StackItem
          key={item.id}
          title={item.title}
          description={item.description}
          type={item.type}
          image={item.image}
          link={item.link}
        />
      ))}
    </div>
  );
}
