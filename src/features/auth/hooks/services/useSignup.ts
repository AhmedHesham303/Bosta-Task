import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { signup } from "../../services/signup";
import type { User } from "@/@types/User";
import { useNavigate } from "react-router";
import { setToken } from "@/lib/tokenStorage";

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: User) => signup(data),

    onSuccess: (data) => {
      setToken(data.token);
      toast.success("Signed up successfullly");
      navigate("/");
    },

    onError: () => {
      toast.error("Failed to signup");
    },
  });
};
