'use client'
import { useEffect } from "react";
import { LoadingContainer } from "./components/loader/Loader.styles";

export default function Loading() {
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      import('ldrs').then(({ momentum }) => {
        momentum.register();
      });
    }
  }, []);
  
  return (
    <LoadingContainer>
      {typeof window !== 'undefined' && <l-momentum size="47" speed="0.9" color="var(--color-main)" />}
    </LoadingContainer>
  );
}
