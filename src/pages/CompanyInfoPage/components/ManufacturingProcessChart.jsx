import React from 'react';

const ManufacturingProcessChart = () => {
  const steps = [
    { id: 1, ko: '원자재 입고', en: 'Raw Materials', desc: '고품질 동스크랩 선별 및 엄격한 입고 검수 진행' },
    { id: 2, ko: '용해', en: 'Melting', desc: '용해로 고온 가열을 통한 불순물 제거 및 합금 성분 조정' },
    { id: 3, ko: '주조', en: 'Casting', desc: '용융된 금속을 연속 주조하여 빌렛(Billet) 및 슬라브(Slab) 생산' },
    { id: 4, ko: '압출', en: 'Extrusion', desc: '고온으로 가열된 빌렛을 압출기를 통해 다양한 형상의 봉재로 압착' },
    { id: 5, ko: '인발', en: 'Drawing', desc: '압출품을 다이(Die)에 통과시켜 원하는 정밀 치수로 인발 가공' },
    { id: 6, ko: '검사', en: 'Inspection', desc: '치수, 표면 상태, 진직도 및 파괴/비파괴 정밀 품질 검수' },
    { id: 7, ko: '포장 및 출하', en: 'Packing & Shipping', desc: '최종 합격품의 안전 포장 규격화 및 신속한 고객사 납품' },
  ];

  return (
    <div className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 shadow-[0_4px_30px_rgba(0,0,0,0.02)] rounded-3xl border border-gray-100 overflow-hidden">
      <div className="text-center mb-16 lg:mb-24">
        <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Manufacturing Process</span>
        <h2 className="text-3xl md:text-4xl font-gmarket font-bold text-[#0A2342] mb-6">제조 공정도</h2>
        <div className="w-16 h-[3px] bg-[#B87333] mx-auto mb-6"></div>
        <p className="text-gray-500 font-light text-lg break-keep">
          원자재부터 최종 출하까지, 우림금속의 체계적이고 엄격한 공정 시스템입니다.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              
              {/* Desktop & Tablet Arrow Connectors */}
              {index !== steps.length - 1 && (
                <>
                  {/* XL (4 cols) Horizontal Arrow */}
                  {index % 4 !== 3 && (
                    <div className="hidden xl:block absolute top-[40px] left-[65%] w-[70%] h-[2px] bg-gradient-to-r from-[#0A2342]/10 to-[#B87333]/50 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-[#B87333]/50"></div>
                    </div>
                  )}
                  {/* MD/LG (2 cols) Horizontal Arrow */}
                  {index % 2 !== 1 && (
                    <div className="hidden md:block xl:hidden absolute top-[40px] left-[65%] w-[70%] h-[2px] bg-gradient-to-r from-[#0A2342]/10 to-[#B87333]/50 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-[#B87333]/50"></div>
                    </div>
                  )}
                </>
              )}

              {/* Number Badge */}
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-[4px] border-gray-100 mb-8 group-hover:border-[#B87333] group-hover:bg-[#0A2342] transition-all duration-500 z-10 relative shadow-sm group-hover:shadow-[0_10px_20px_rgba(184,115,51,0.2)] hover:scale-110 cursor-default">
                <span className="text-gray-400 font-gmarket font-black text-2xl group-hover:text-white transition-colors duration-500">
                  {String(step.id).padStart(2, '0')}
                </span>
              </div>

              {/* Content Card */}
              <div className="bg-[#FAFBFD] w-full h-full rounded-2xl p-8 border border-[#0A2342]/5 shadow-[0_4px_20px_rgba(10,35,66,0.02)] group-hover:shadow-[0_15px_30px_rgba(10,35,66,0.08)] group-hover:border-[#B87333]/30 transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col items-center">
                <h3 className="text-2xl font-gmarket font-bold text-[#0A2342] mb-2">{step.ko}</h3>
                <p className="text-[#B87333] text-[10px] font-black uppercase tracking-[0.2em] mb-5">{step.en}</p>
                <div className="w-8 h-px bg-gray-200 mb-5 group-hover:bg-[#B87333] transition-colors"></div>
                <p className="text-gray-500 text-[15px] font-light break-keep leading-relaxed">{step.desc}</p>
              </div>

              {/* Mobile vertical arrows */}
              {index !== steps.length - 1 && (
                <div className="md:hidden w-px h-10 bg-gray-200 my-2 relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-t-[6px] border-t-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManufacturingProcessChart;
