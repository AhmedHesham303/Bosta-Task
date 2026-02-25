import { useSearchParams } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCategories } from "../../../hooks/services/useGetCategories";
import { updateSearchParam } from "@/lib/updateSearchParams";

export default function CategoriesFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: categories } = useGetCategories();

  return (
    <div>
      <span>Sort By Categories</span>
      <Select
        value={searchParams.get("category") ?? ""}
        onValueChange={(value) =>
          updateSearchParam(setSearchParams, "category", value)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {categories?.map((category: string) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
