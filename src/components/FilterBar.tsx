import { categories } from "@/types/experience";
export function FilterBar({
  category,
  onChange,
}: {
  category: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="filter-tabs" role="group" aria-label="Filter by category">
      {["", ...categories].map((value) => (
        <button
          type="button"
          key={value}
          aria-pressed={category.toLowerCase() === value.toLowerCase()}
          onClick={() => onChange(value)}
        >
          {value || "All experiences"}
        </button>
      ))}
    </div>
  );
}
