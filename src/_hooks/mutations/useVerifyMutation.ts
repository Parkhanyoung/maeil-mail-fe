import { postVerifyEmail } from "@/_apis/subscriptionAPI";
import toast from "@/_utils/toast";
import { useMutation } from "@tanstack/react-query";
import { ERROR_MESSAGE } from "@/_constants/messages";
import { useState } from "react";

interface UseVerifyMutationOptions {
  email: string;
  isValidCategories: boolean;
}

const useVerifyMutation = ({ email, isValidCategories }: UseVerifyMutationOptions) => {
  const [isSentEmail, setIsSentEmail] = useState(false);

  const { mutate: verifyEmailMutation, isPending: isVerifyingPending } = useMutation({
    mutationFn: postVerifyEmail,
    onError: () => toast.error(ERROR_MESSAGE.fail_verify_email),
    onSuccess: () => setIsSentEmail(true),
  });

  const handleVerifyEmail = () => {
    if (!isValidCategories) {
      toast.error(ERROR_MESSAGE.invalid_category);
      return;
    }

    verifyEmailMutation(email);
  };

  return { isSentEmail, handleVerifyEmail, isVerifyingPending };
};

export default useVerifyMutation;