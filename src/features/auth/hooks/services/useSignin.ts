import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { User } from "@/@types/User";
import { useNavigate } from "react-router";
import { signin } from "../../services/signin";
import { setToken } from "@/lib/tokenStorage";

export const useSignIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: User) => signin(data),

    onSuccess: (data) => {
      setToken(data.token);
      toast.success("Signed in successfullly");
      navigate("/");
    },

    onError: () => {
      toast.error("Failed to signin");
    },
  });
};
