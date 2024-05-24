// hook to return current url which is used to share in social media
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const useSocialShare = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.href;
      setCurrentUrl(fullUrl);
    }
  }, []);

  return currentUrl;
};

export default useSocialShare;
