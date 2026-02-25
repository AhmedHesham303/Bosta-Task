import { useNavigate } from "react-router";
import { PiFileX, PiHouse } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4 py-12">
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-muted flex size-24 items-center justify-center rounded-full">
            <PiFileX className="size-12 text-neutral-800" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-mono text-6xl font-bold text-neutral-800">
              404
            </h1>
            <h2 className="font-mono text-xl font-medium text-neutral-500">
              Page Not Found
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center items-center">
          <Button
            variant="default"
            size="lg"
            onClick={handleGoHome}
            className={cn("w-full uppercase sm:w-auto sm:min-w-[140px]")}
          >
            <PiHouse className="size-4" />
            <span className="font-mono text-xs">Go Home</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
