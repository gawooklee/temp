import React, { useState, useEffect } from 'react';

// 초기 목업 데이터 정의
const initialMetalsData = [
  { kor: '구리', eng: 'Copper', today: 9586.00, yesterday: 9563.00, dayBefore: 9564.00 },
  { kor: '알루미늄', eng: 'Aluminium', today: 2557.00, yesterday: 2568.00, dayBefore: 2594.00 },
  { kor: '아연', eng: 'Zinc', today: 2701.00, yesterday: 2677.00, dayBefore: 2699.00 },
  { kor: '납', eng: 'Lead', today: 1940.00, yesterday: 1953.00, dayBefore: 1967.00 },
  { kor: '니켈', eng: 'Nickel', today: 14800.00, yesterday: 14800.00, dayBefore: 14840.00 },
  { kor: '주석', eng: 'Tin', today: 32735.00, yesterday: 32700.00, dayBefore: 33400.00 },
];

// 가격 정보를 표시하는 작은 헬퍼 컴포넌트
const PriceDisplay = ({ price, prevPrice }) => {
  const change = price - prevPrice;
  const percentage = prevPrice === 0 ? 0 : (change / prevPrice) * 100;

  const isUp = change > 0;
  const isDown = change < 0;

  // 숫자를 콤마 포맷으로 변경 (예: 9586 -> 9,586.00)
  const formatPrice = (p) => p.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div>
      <p className="font-semibold text-white text-sm md:text-base">{formatPrice(price)}</p>
      <div className={`text-xs md:text-sm font-mono ${isUp ? 'text-red-500' : isDown ? 'text-sky-400' : 'text-gray-500'}`}>
        <span>{percentage.toFixed(2)}%</span>
        <span className="inline-block mx-1">{isUp ? '▲' : isDown ? '▼' : '─'}</span>
        <span>{Math.abs(change).toFixed(0)}</span>
      </div>
    </div>
  );
};


const LMEPriceWidget = () => {
  const [metals, setMetals] = useState(initialMetalsData);
  const [dates, setDates] = useState({ today: '', yesterday: '' });

  // 컴포넌트가 처음 마운트될 때 날짜 설정
  useEffect(() => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const formatDate = (d) => `${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getDate().toString().padStart(2, '0')}`;
    
    setDates({
      today: formatDate(today),
      yesterday: formatDate(yesterday),
    });
  }, []);

  // 30초마다 목업 데이터를 임의로 변경하는 타이머 설정
  useEffect(() => {
    const timer = setInterval(() => {
      setMetals(prevMetals => 
        prevMetals.map(metal => {
          // 실제 데이터처럼 보이도록 기존 데이터 기반으로 소폭 변경
          const newTodayPrice = metal.today + (Math.random() - 0.5) * (metal.today / 500);
          return {
            ...metal,
            dayBefore: metal.yesterday,
            yesterday: metal.today,
            today: newTodayPrice,
          };
        })
      );
    }, 30000); // 30초

    // 컴포넌트가 언마운트될 때 타이머 정리 (메모리 누수 방지)
    return () => clearInterval(timer);
  }, []);

  return (
    // 사이드바에 적합하도록 너비 제한 및 반응형 디자인 적용
    <div className="w-full max-w-lg mx-auto bg-gray-800 text-white rounded-lg p-3 md:p-4 shadow-lg">
      
      {/* 위젯 헤더 */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg md:text-xl">LME 시세</h2>
        <span className="text-xs text-gray-400">현물 US$/톤</span>
      </div>

      {/* 시세 표 */}
      <div className="space-y-2">
        {/* 표 헤더 */}
        <div className="grid grid-cols-3 gap-2 text-center text-gray-400 text-xs md:text-sm font-bold bg-gray-900/50 p-2 rounded-md">
          <span>금속명</span>
          <span>{dates.today}</span>
          <span>{dates.yesterday}</span>
        </div>

        {/* 표 내용 (map으로 렌더링) */}
        {metals.map((metal, index) => (
          <div key={index} className="grid grid-cols-3 gap-2 items-center text-center py-1.5 border-b border-gray-700 last:border-b-0">
            {/* 금속명 (한글/영문) */}
            <div className="text-center">
              <p className="font-bold text-sm md:text-base text-white">{metal.kor}</p>
              <p className="text-xs text-gray-400 -mt-1">{metal.eng}</p>
            </div>
            {/* 오늘 시세 */}
            <PriceDisplay price={metal.today} prevPrice={metal.yesterday} />
            {/* 어제 시세 */}
            <PriceDisplay price={metal.yesterday} prevPrice={metal.dayBefore} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LMEPriceWidget;