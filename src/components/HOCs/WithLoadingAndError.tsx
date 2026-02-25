import type { ReactNode } from "react";
import ErrorMessage, {
  type ErrorMessageProps,
} from "@/components/feedbacks/ErrorMessage";
import NoData, { type NoDataProps } from "@/components/feedbacks/NoData";
import Spinner from "@/components/feedbacks/Spinner";

interface WithLoadingAndErrorProps {
  children: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  hasNoData?: boolean;
  errorMessageProps?: ErrorMessageProps;
  noDataMessageProps?: NoDataProps;
}

const WithLoadingAndError = ({
  children,
  isLoading,
  isError,
  hasNoData,
  errorMessageProps,
  noDataMessageProps,
}: WithLoadingAndErrorProps) => {
  const feedbackWrapper = (node: ReactNode) => (
    <div className="flex flex-1 items-center justify-center min-h-[calc(100vh-3rem)]">
      {node}
    </div>
  );

  if (isLoading) return feedbackWrapper(<Spinner />);
  else if (isError)
    return feedbackWrapper(<ErrorMessage {...errorMessageProps} />);
  else if (hasNoData)
    return feedbackWrapper(<NoData {...noDataMessageProps} />);
  return children;
};

export default WithLoadingAndError;
