import { useEffect, useState } from 'react';

function useImagePreloader(imageSources: string[]) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!imageSources.length) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;

    imageSources.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / imageSources.length) * 100));
        if (loadedCount === imageSources.length) setIsLoading(false);
      };
      img.src = src;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, progress };
}

export default useImagePreloader;