import { Button } from "../ui/button";

type UpdateQuantityBtnProps = {
  incrementAction: () => void;
  decrementAction: () => void;
  value: number;
};

export default function UpdateQuantityBtn({
  incrementAction,
  decrementAction,
  value,
}: UpdateQuantityBtnProps) {
  return (
    <div className="flex items-center gap-3 bg-[#f5f0eb] rounded-full px-2 py-1 w-fit">
      <Button
        onClick={decrementAction}
        disabled={value <= 1}
        variant="outline"
        className="rounded-full"
      >
        −
      </Button>

      <span className="w-6 text-center text-sm font-bold text-[#1a1a1a] select-none">
        {value}
      </span>

      <Button
        onClick={incrementAction}
        className="rounded-full"
        variant="outline"
      >
        +
      </Button>
    </div>
  );
}
