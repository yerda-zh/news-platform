// hook to return current url which is used to share in social media
import { usePathname } from 'next/navigation';

const useSocialShare = () => {
  const currentUrl = usePathname();
  return { currentUrl };
};

export default useSocialShare;
