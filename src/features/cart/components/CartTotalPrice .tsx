export default function CartTotalPrice({ totalPrice }: { totalPrice: number }) {
  return (
    <div className="text-right">
      <p className="text-sm text-gray-500">Total Price</p>
      <p className="text-2xl font-bold text-black">${totalPrice.toFixed(2)}</p>
    </div>
  );
}
