import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

type RemoveCartBtnProps = {
  action: () => void;
};

export default function RemoveCartBtn({ action }: RemoveCartBtnProps) {
  return (
    <Button size="sm" variant="outline" onClick={action}>
      <Trash2Icon className="h-4 w-4" />
    </Button>
  );
}
