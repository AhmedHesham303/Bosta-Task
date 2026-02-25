import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PriceFilter() {
  return (
    <div>
      <span>Sort By Price</span>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select asc/desc" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"asc"}>ASC</SelectItem>
          <SelectItem value={"desc"}>DESC</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
