import React, { useState, useEffect } from 'react';

interface MetalPrice {
  name: string;
  price: number;
  change: number;
}

const metalsInitial: MetalPrice[] = [
  { name: 'Copper', price: 9000, change: 0 },
  { name: 'Aluminum', price: 2500, change: 0 },
  { name: 'Zinc', price: 3200, change: 0 },
  { name: 'Lead', price: 2100, change: 0 },
  { name: 'Nickel', price: 18000, change: 0 },
  { name: 'Tin', price: 23000, change: 0 },
];

export default function Home() {
  const [prices, setPrices] = useState<MetalPrice[]>(metalsInitial);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prevPrices) => {
        return prevPrices.map((metal) => {
          // Simulate price change between -1% and +1%
          const changePercent = (Math.random() * 2 - 1) / 100;
          const newPrice = +(metal.price * (1 + changePercent)).toFixed(2);
          const change = +(newPrice - metal.price).toFixed(2);
          return {
            ...metal,
            price: newPrice,
            change,
          };
        });
      });
    }, 5000); // update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900">LME Real-Time Prices</h1>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="pb-2 border-b border-gray-200">Metal</th>
              <th className="pb-2 border-b border-gray-200">Price (USD/ton)</th>
              <th className="pb-2 border-b border-gray-200">Change</th>
            </tr>
          </thead>
          <tbody>
            {prices.map(({ name, price, change }) => (
              <tr key={name} className="hover:bg-gray-100">
                <td className="py-2 font-medium text-gray-800">{name}</td>
                <td className="py-2 text-gray-700">{price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td
                  className={`py-2 font-semibold ${change > 0 ? 'text-green-600' : change < 0 ? 'text-red-600' : 'text-gray-600'}`}
                >
                  {change > 0 ? '+' : ''}{change.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-gray-500">Prices update every 5 seconds (simulated)</p>
      </div>
    </main>
  );
}
