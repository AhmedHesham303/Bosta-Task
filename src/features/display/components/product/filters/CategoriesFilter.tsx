import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCategories } from "../../../hooks/services/useGetCategories";

export default function CategoriesFilter() {
  const { data: categories } = useGetCategories();

  return (
    <div>
      <span>Sort By Categories</span>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select cateory" />
        </SelectTrigger>
        <SelectContent>
          {categories?.map((category: string) => (
            <SelectItem value={category}>{category}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
