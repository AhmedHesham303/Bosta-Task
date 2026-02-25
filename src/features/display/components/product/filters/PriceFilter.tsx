import { useSearchParams } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateSearchParam } from "@/lib/updateSearchParams";

export default function PriceFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <span>Sort By Price</span>
      <Select
        value={searchParams.get("sort") ?? ""}
        onValueChange={(value) =>
          updateSearchParam(setSearchParams, "sort", value)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select asc/desc" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">ASC</SelectItem>
          <SelectItem value="desc">DESC</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
