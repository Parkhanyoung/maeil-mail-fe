import { Category } from '@/types';
import BASE_URL from './baseUrl';
import API_ROUTES from './routes';

export const postSubscribe = async ({ email, category }: { email: string; category: Category }) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.post_subscribe}`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러~');
  }
};
