import { useSearchParams } from "react-router";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { Button } from "@/components/ui/button";

type PaginationProps = {
  paramKey?: string;
  pageCount?: number;
};

function Pagination({ paramKey = "page", pageCount = 1 }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get(paramKey) || "1";

  const handlePageChange = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected + 1;
    setSearchParams(
      (prevSearchParams) => {
        prevSearchParams.set(paramKey, newPage.toString());
        return prevSearchParams;
      },
      { replace: true },
    );
  };

  return (
    <ReactPaginate
      breakLabel="..."
      initialPage={Number(page) - 1}
      onPageChange={handlePageChange}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-center gap-2 w-full"
      pageClassName="mx-1"
      pageLinkClassName="px-3 py-1 rounded-md border border-zinc-300 text-sm font-medium text-neutral-300 hover:bg-zinc-100 hover:text-neutral-900 cursor-pointer"
      activeLinkClassName="text-neutral-900 border-zinc-500 bg-zinc-100"
      previousLabel={
        <Button
          variant="outline"
          className="flex w-30 items-center gap-1 text-sm max-sm:p-1 max-sm:text-xs"
        >
          <IoIosArrowBack /> Previous
        </Button>
      }
      nextLabel={
        <Button variant="outline" className="flex w-30 items-center gap-1">
          Next <IoIosArrowForward />
        </Button>
      }
    />
  );
}

export default Pagination;
