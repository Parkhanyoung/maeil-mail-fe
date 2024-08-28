import { useState } from 'react';
import { Category } from '@/types';

const isCategory = (value: any): value is Category => {
  return value === 'frontend' || value === 'backend';
};

const useCategory = () => {
  const [category, setCategory] = useState<Category | ''>('');
  const isValidCategory = category !== '';

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isCategory(value)) {
      setCategory(value);
    }
  };

  return { category, isValidCategory, handleCategory };
};

export default useCategory;