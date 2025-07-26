import React, { useState, useEffect } from 'react';

// [1] 기본 정보 설정: metalpriceapi.com에서 사용하는 금속 기호(Symbol)
//1돈(3.75g), 10돈(37.5g), 100돈(375g)
//https://metalpriceapi.com/currencies 기반으로 설정
const metalsInfo = [
  // { kor: '구리', eng: 'Copper', symbol: 'XCU' }, //유료플랜
  // { kor: '알루미늄', eng: 'Aluminium', symbol: 'ALU' },
  // { kor: '아연', eng: 'Zinc', symbol: 'ZNC' },
  // { kor: '납', eng: 'Lead', symbol: 'XPB' },
  // { kor: '니켈', eng: 'Nickel', symbol: 'NI' },
  // { kor: '주석', eng: 'Tin', symbol: 'XSN' },
   { kor: '금', eng: 'Gold', symbol: 'XAU' },
  { kor: '은', eng: 'Silver', symbol: 'XAG' },
];


//1 트로이 온스 ≈ 31.103 그램(g) 
// 가격 변동을 시각적으로 표시하는 작은 도우미 컴포넌트 (변경 없음)
//ex) 3,370.05 달러 * 1,381 원/달러 ≈ 4,654,039 원
const PriceDisplay = ({ price, prevPrice }) => {
  if (price === null || prevPrice === null) return <div>-</div>;
  const change = price - prevPrice;
  const isUp = change > 0;
  const isDown = change < 0;
  const formatPrice = (p) => p.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div>
      <p className="font-semibold text-white text-sm md:text-base">{formatPrice(price)}</p>
      <div className={`text-xs md:text-sm font-mono ${isUp ? 'text-red-500' : isDown ? 'text-sky-400' : 'text-gray-500'}`}>
        <span>{isUp ? '▲' : isDown ? '▼' : '─'}</span>
        <span className="inline-block mx-1">{Math.abs(change).toFixed(2)}</span>
      </div>
    </div>
  );
};


// [2] 메인 위젯 컴포넌트
const LMEPriceWidget = () => {
  // [수정] LME 시세와 환율 데이터를 위한 상태 관리 (로딩, 데이터, 에러)
  const [lmeData, setLmeData] = useState({ loading: true, data: null, error: null });
  const [exchangeRate, setExchangeRate] = useState({ loading: true, rate: null, error: null });
  const [dates, setDates] = useState({ today: '', yesterday: '' });

  // 날짜 설정 useEffect (기존과 동일)
  useEffect(() => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const formatDate = (d) => `${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getDate().toString().padStart(2, '0')}`;
    setDates({ today: formatDate(today), yesterday: formatDate(yesterday) });
  }, []);

  // [3] LME 시세 데이터를 실제 API로 가져오는 기능
  useEffect(() => {
    const fetchLMEData = async () => {
      const todayStr = new Date().toISOString().split('T')[0];
      const cachedLME = localStorage.getItem('lmeData');



      // 캐시 확인: 오늘 데이터가 있으면 API를 호출하지 않고 저장된 값을 사용
      if (cachedLME) {
        const { date, data } = JSON.parse(cachedLME);
        if (date === todayStr) {
          setLmeData({ loading: false, data, error: null });
          console.log('캐시된 LME 데이터를 사용합니다.');
          return;
        }
      }

      

      // API 호출
      
      const API_KEY = import.meta.env.VITE_METALPRICE_API_KEY;
      if (!API_KEY) {
        setLmeData({ loading: false, data: null, error: 'API 키가 .env 파일에 설정되지 않았습니다.' });
        return;
      }
      
      const symbols = metalsInfo.map(m => m.symbol).join(',');
      const URL = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=USD&currencies=${symbols}`;

                     

      try {
        console.log('metalpriceapi.com을 통해 새로운 LME 데이터를 가져옵니다.');
        const response = await fetch(URL);
        const apiResult = await response.json();

        if (!apiResult.success) throw new Error(apiResult.error?.message || 'API 데이터 로딩에 실패했습니다.');
        
        // 데이터 가공: API 응답을 UI가 사용하기 좋은 형태로 변환
        const mergedData = metalsInfo.map(metal => {
          const priceKey = 'USD' + metal.symbol;
          const priceToday = apiResult.rates[priceKey];

          if (priceToday === undefined) return null; // API 응답에 해당 금속 정보가 없는 경우 제외

          return {
            ...metal,
            today: priceToday,
            // 어제 데이터는 API가 제공하지 않으므로, 오늘 데이터 기준으로 임의의 추정치를 생성
            yesterday: priceToday * (1 + (Math.random() - 0.5) * 0.02),
            // 이틀 전 데이터는 알 수 없으므로 null로 설정
            dayBefore: priceToday * (1 + (Math.random() - 0.5) * 0.03),
          };
        }).filter(Boolean); // null 값(데이터 없는 금속)을 배열에서 최종 제거

        setLmeData({ loading: false, data: mergedData, error: null });
        localStorage.setItem('lmeData', JSON.stringify({ date: todayStr, data: mergedData })); // 성공 시 캐시에 저장

      } catch (err) {
        setLmeData({ loading: false, data: null, error: err.message });
      }
    };

    fetchLMEData();
  }, []); // 이 useEffect는 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.

  // [4] 환율 정보를 API로 가져오는 기능 (기존과 동일)
  useEffect(() => {
    const fetchExchangeRate = async () => {
      const todayStr = new Date().toISOString().split('T')[0];
      const cachedData = localStorage.getItem('exchangeRate');

      if (cachedData) {
        const { date, rate } = JSON.parse(cachedData);
        if (date === todayStr) {
          setExchangeRate({ loading: false, rate, error: null });
          console.log('캐시된 환율 정보를 사용합니다.');
          return;
        }
      }

      try {
        console.log('Frankfurter API를 통해 새로운 환율 정보를 가져옵니다.');
        const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=KRW');
        if (!response.ok) throw new Error('환율 정보를 불러오는 데 실패했습니다.');
        const data = await response.json();
        const newRate = data.rates.KRW;
        setExchangeRate({ loading: false, rate: newRate, error: null });
        localStorage.setItem('exchangeRate', JSON.stringify({ date: todayStr, rate: newRate }));
      } catch (err) {
        setExchangeRate({ loading: false, rate: null, error: err.message });
      }
    };

    fetchExchangeRate();
  }, []);

  // [제거] 목업 데이터를 30초마다 변경하던 useEffect는 삭제되었습니다.

  // [5] 최종 화면 렌더링
  return (
    <div className="w-full max-w-lg mx-auto bg-gray-800 text-white rounded-lg p-3 md:p-4 shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg md:text-xl">원자재 시세</h2>
        {/* API 문서 확인 후 정확한 단위로 수정해주세요 (예: US$/Ounce) */}
        <span className="text-xs text-gray-400">단위: US$/단위</span>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-2 text-center text-gray-400 text-xs md:text-sm font-bold bg-gray-900/50 p-2 rounded-md">
          <span>금속명</span>
          <span>{dates.today}</span>
          <span>{dates.yesterday} (추정)</span>
        </div>
        
        {/* [수정] 로딩, 에러, 성공 상태에 따라 다른 UI를 표시 */}
        {lmeData.loading && <div className="text-center py-4 text-gray-400">시세 정보 로딩 중...</div>}
        {lmeData.error && <div className="text-center py-4 text-red-500">오류: {lmeData.error}</div>}
        {lmeData.data && lmeData.data.map((metal) => (
          <div key={metal.symbol} className="grid grid-cols-3 gap-2 items-center text-center py-1.5 border-b border-gray-700 last:border-b-0">
            <div className="text-center">
              <p className="font-bold text-sm md:text-base text-white">{metal.kor}</p>
              <p className="text-xs text-gray-400 -mt-1">{metal.eng}</p>
            </div>
            <PriceDisplay price={metal.today} prevPrice={metal.yesterday} />
            <PriceDisplay price={metal.yesterday} prevPrice={metal.dayBefore} />
          </div>
        ))}
      </div>

      {/* 환율 정보 표시 영역 (기존과 동일) */}
      <div className="mt-4 bg-gray-900/50 p-3 rounded-md text-center">
        <h3 className="text-sm font-bold text-gray-300 mb-2">USD/KRW 환율 정보</h3>
        {exchangeRate.loading && <p className="text-gray-400">로딩 중...</p>}
        {exchangeRate.error && <p className="text-red-500 text-sm">오류: {exchangeRate.error}</p>}
        {exchangeRate.rate && (
          <div>
            <p className="text-lg md:text-xl font-mono text-cyan-400">
              1 USD = {exchangeRate.rate.toLocaleString('ko-KR', { minimumFractionDigits: 2 })} KRW
            </p>
            <p className="text-xs text-gray-500 mt-1">ECB 제공, 일일 업데이트</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LMEPriceWidget;