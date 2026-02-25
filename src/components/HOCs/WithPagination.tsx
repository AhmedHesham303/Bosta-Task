import { cn } from "@/lib/utils";
import Pagination from "../common/Pagination";
import type { ReactNode } from "react";

export default function WithPagination({
  children,
  enabled = true,
  wrapperClassName,
  pages,
}: {
  children: ReactNode;
  enabled: boolean;
  wrapperClassName?: string;
  pages: number;
}) {
  return (
    <div>
      <div className={cn(enabled && "flex flex-col gap-7.5", wrapperClassName)}>
        {children}
        {enabled && <Pagination pageCount={pages} />}
      </div>
    </div>
  );
}
