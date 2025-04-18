import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { postGithubAccessToken } from '@/common/apis/postGithubAccessToken';

export const useLoginMutation = (code: string, returnPath: string = '/') => {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const accessToken = await postGithubAccessToken(code);
      await mainClient.post(API_ROUTES.member, {
        oauthAccessToken: accessToken,
      });
    },
    onSuccess: () => {
      router.push(returnPath);
    },
    throwOnError: true,
  });
};
