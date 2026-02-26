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
      <button
        onClick={decrementAction}
        disabled={value <= 1}
        className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold text-[#1a1a1a] bg-white shadow-sm hover:bg-[#1a1a1a] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        −
      </button>

      <span className="w-6 text-center text-sm font-bold text-[#1a1a1a] select-none">
        {value}
      </span>

      <button
        onClick={incrementAction}
        className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold text-[#1a1a1a] bg-white shadow-sm hover:bg-[#1a1a1a] hover:text-white transition-all"
      >
        +
      </button>
    </div>
  );
}
