import debounce from '@/_utils/debounce';
import { useEffect, useState } from 'react';

const DEBOUNCE_WAIT = 300;

const useDeviceWidth = () => {
  const [width, setWidth] = useState<number>();

  const handleResize = debounce(() => {
    setWidth(window.innerWidth);
  }, DEBOUNCE_WAIT);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useDeviceWidth;
