'use client';
import { useEffect, useState } from 'react';

export default function BTCPrice() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch('http://localhost:8000/btc/price');
        const data = await res.json();
        setPrice(data.price);
      } catch (error) {
        console.error('Error fetching BTC price:', error);
      }
    };

    fetchPrice(); // Initial fetch
    const interval = setInterval(fetchPrice, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl font-semibold text-green-400">
      BTC Price: {price ? `$${price}` : 'Loading...'}
    </div>
  );
}
