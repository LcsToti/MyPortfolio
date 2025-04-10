import {
  STACK_TYPES,
  STACK_TYPE_LABELS,
  type StackType,
} from "@/types/StackItemTypes";

type Props = {
  onSelectType: (type: StackType | null) => void;
  selectedType: StackType | null;
};

export default function StackFilter({ onSelectType, selectedType }: Props) {
  return (
    <select
      name="stackFilter"
      value={selectedType ?? ""}
      onChange={(e) =>
        onSelectType(
          e.target.value === "" ? null : (e.target.value as StackType)
        )
      }
      className="
         rounded-lg text-sm font-medium text-neutral-700 border-2 border-neutral-200 shadow-md
        bg-neutral-200 hover:bg-neutral-300 hover:border-neutral-500  transition-all duration-200
        dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark: dark:border-neutral-700
        p-2
        "
    >
      <option value="">Todas Skills</option>
      {STACK_TYPES.map((type) => (
        <option key={type} value={type}>
          {STACK_TYPE_LABELS[type]}
        </option>
      ))}
    </select>
  );
}
