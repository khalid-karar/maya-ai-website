import { useState, useEffect } from 'react';

export type Market = 'us' | 'sa';

export function getMarket(): Market {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname.endsWith('.sa') || hostname === 'mayaai.sa') return 'sa';
  }
  return 'us';
}

export function useMarket(): Market {
  const [market, setMarket] = useState<Market>(getMarket());

  useEffect(() => {
    setMarket(getMarket());
  }, []);

  return market;
}
