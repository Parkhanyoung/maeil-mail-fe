import { useMutation } from '@tanstack/react-query';
import { postSubscribe } from '@/apis/api';
import toast from '@/utils/toast';
import { PROGRESS_MESSAGE, ERROR_MESSAGE } from '@/constants/messages';

const useSubscriptionMutation = () => {
  const {
    mutate: subscriptionMutation,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: postSubscribe,
    onSuccess: () => {
      toast.success(PROGRESS_MESSAGE.success_subscription);
    },
    onError: () => {
      toast.error(ERROR_MESSAGE.fail_subscription);
      console.error(ERROR_MESSAGE.fail_subscription);
    },
  });

  return {
    subscriptionMutation,
    isSuccess,
    isPending,
  };
};

export default useSubscriptionMutation;
