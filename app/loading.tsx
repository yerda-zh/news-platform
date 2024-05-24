'use client'
import { useEffect } from "react";

export default function Loading() {
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      import('ldrs').then(({ momentum }) => {
        momentum.register();
      });
    }
  }, []);
  
  
  return (
    <div style={{width: '100%', height: '90dvh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {typeof window !== 'undefined' && <l-momentum size="47" speed="0.9" color="var(--color-main)" />}
    </div>
  );
}
