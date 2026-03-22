import React from 'react';

// 공정 데이터를 이곳에 정의합니다. (이미지 배제)
const processingData = [
  {
    id: 'rolling',
    title: '압연',
    eng: 'ROLLING',
    desc: '비철금속 원판을 고객이 원하는 두께로 정밀하게 단조/압축하여 롤 형태로 만드는 핵심 공정입니다.',
    specs: [
      { label: '품종', value: '동 및 동합금' },
      { label: '생산두께', value: '0.03mm ~ 1.0mm' },
      { label: '생산폭', value: 'MAX 250mm' },
    ],
  },
  {
    id: 'slitting',
    title: '슬리팅',
    eng: 'SLITTING',
    desc: '롤 형태의 코일을 고객이 요구하는 정밀한 폭 규격에 맞춰 세밀하게 절단(Slitting)하는 공정입니다.',
    specs: [
      { label: '품종', value: '동 및 동합금, 주석도금제품' },
      { label: '생산두께', value: '0.03mm ~ 1.5mm' },
      { label: '생산폭', value: '5mm ~ 600mm' },
    ],
  },
  {
    id: 'tin-plating',
    title: '주석도금',
    eng: 'TIN PLATING',
    desc: '동 및 동합금 코일 표면에 주석을 도금하여 내부식성 및 납땜성을 높이는 표면처리 기술입니다.',
    specs: [
      { label: '품종', value: '동 및 동합금 코일에 주석도금' },
      { label: '도금방식', value: '동하지 도금 후 주석 도금' },
      { label: '생산 종류', value: 'MATTE(무광), REFLOW(유광)' },
      { label: '도금두께', value: '동하지(0.5㎛~1.0㎛), 주석(무광 MAX 3㎛, 유광 MAX 2㎛)' },
      { label: '생산폭', value: 'MAX 310mm' },
    ],
  },
  {
    id: 'traverse-winding',
    title: '트래버스 와인딩',
    eng: 'TRAVERSE WINDING',
    desc: '절단된 코일을 대형 장축 보빈에 연속적으로 감아 고객사의 후공정 작업 효율을 최고조로 끌어올리는 공정입니다.',
    specs: [
        { label: '품종', value: '동 및 동합금 코일' },
        { label: '생산두께', value: '0.15mm ~ 0.8mm' },
        { label: '생산폭', value: '10mm ~ 50mm' },
        { label: '생산중량', value: 'MAX 500kg / BOBBIN' },
    ],
  },
  {
    id: 'de-tin',
    title: '주석박리',
    eng: 'DE-TIN',
    desc: '도금 또는 슬리팅 시 발생하는 주석 도금 스크랩 잔여물을 박리액으로 깔끔하게 제거하여 원자재로 재생하는 마감/친환경 공정입니다.',
    specs: [
        { label: '공정 효과', value: '자원 순환 및 원자재 재생산 고도화' },
    ],
  },
];

const ProcessingCapabilities = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* 헤더 섹션 */}
        <div className="text-center mb-24">
          <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Process & Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-gmarket font-bold text-[#0A2342] mb-6">핵심 가공 기술 및 생산 규격</h2>
          <div className="w-16 h-[3px] bg-[#B87333] mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-500 font-light break-keep">
            우림금속만의 독보적이고 정밀한 기술력으로 고객의 엄격한 요구사항을 완벽하게 충족시키는 원스톱 특수소재 가공 공정망입니다.
          </p>
        </div>

        {/* 버티컬 타임라인 (프로세스 리스트) */}
        <div className="relative">
          {/* 중앙 수직선 (데스크탑) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] bottom-[30px] w-px bg-gray-200"></div>

          <div className="space-y-12 lg:space-y-6">
            {processingData.map((process, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={process.id} className="relative flex flex-col lg:flex-row items-center justify-between group">
                  
                  {/* 중앙 원형 넘버 마커 (데스크탑) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-gray-100 rounded-full items-center justify-center z-10 text-[#0A2342] font-gmarket text-xl group-hover:border-[#B87333] group-hover:bg-[#B87333] group-hover:text-white transition-all duration-500 shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* 좌우 카드 레이아웃 */}
                  <div className={`w-full lg:w-[45%] ${isEven ? 'lg:pl-0 lg:pr-14 lg:text-right' : 'lg:order-last lg:pr-0 lg:pl-14 lg:text-left'}`}>
                    
                    {/* 모바일 뷰 넘버 마커 */}
                    <div className="lg:hidden w-12 h-12 bg-[#0A2342] text-white rounded-full flex items-center justify-center font-gmarket text-lg mb-5 shadow-lg border-2 border-white">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* 공정 컨텐츠 카드 */}
                    <div className={`bg-white rounded-2xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-t-4 ${isEven ? 'border-[#B87333]/0' : 'border-[#0A2342]/0'} group-hover:border-[#B87333] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(10,35,66,0.1)] relative overflow-hidden flex flex-col ${isEven ? 'lg:items-end' : 'lg:items-start'}`}>
                      
                      <p className="text-[#B87333] text-[11px] font-black tracking-[0.25em] mb-2 uppercase opacity-80 group-hover:opacity-100 transition-opacity">{process.eng}</p>
                      <h3 className="text-3xl font-gmarket font-bold text-[#0A2342] mb-4">{process.title}</h3>
                      <p className={`text-gray-500 font-light text-[15px] mb-8 break-keep leading-relaxed ${isEven ? 'lg:text-right' : 'text-left'}`}>
                        {process.desc}
                      </p>
                      
                      {/* 스펙 표 (Specs) */}
                      <div className="w-full bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <ul className="space-y-4">
                          {process.specs.map(spec => (
                            <li key={spec.label} className={`flex flex-col sm:flex-row gap-2 sm:gap-4 ${isEven ? 'lg:justify-end lg:flex-row-reverse' : 'justify-start lg:flex-row'}`}>
                              <span className={`text-[12px] font-bold text-gray-400 w-full sm:w-24 shrink-0 uppercase tracking-widest ${isEven ? 'lg:text-left' : 'text-left'}`}>
                                {spec.label}
                              </span>
                              <span className={`text-[14px] font-medium text-[#0A2342] w-full ${isEven ? 'lg:text-right' : 'text-left'}`}>
                                {spec.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                  
                  {/* 반대편 빈 공간 (지그재그 레이아웃 균형용) */}
                  <div className="hidden lg:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProcessingCapabilities;