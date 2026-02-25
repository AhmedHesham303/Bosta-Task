import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
export default function ProductsFilter() {
  return (
    <div className="flex gap-4 items-center">
      <CategoriesFilter />
      <PriceFilter />
    </div>
  );
}
