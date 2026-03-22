import React, { useState } from 'react';

const CompanyStructurePage = () => {
  const [mainCompany] = useState({
    id: 'main',
    name: '우림금속',
    eng: 'WOORIM METAL',
    description: '최고의 품질과 기술력을 바탕으로 기업과 산업의 든든한 기반이 되는 비철금속 원자재 전문 제조/공급 시스템',
  });

  const [affiliates] = useState([
    {
      id: 'affiliate1',
      name: '주화금속',
      eng: 'JUHWA METAL',
      description: '우림금속의 핵심 소재에 필요한 1차 주 원자재를 매입 및 공급하며 품질 경쟁력의 시작을 담당합니다.',
    },
    {
      id: 'affiliate2',
      name: '대승산업',
      eng: 'DAESEUNG IND.',
      description: '금속 및 산업 원자재의 신속하고 안전한 공급망을 책임지는 유통 및 운송 전문 파트너 기업입니다.',
    },
  ]);

  return (
    <div className="w-full bg-[#FAFAFA] py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#B87333] font-bold tracking-widest uppercase text-sm mb-3 block">Family Companies</span>
          <h1 className="text-3xl md:text-5xl font-gmarket font-bold text-[#0A2342] mb-6">
            관계사
          </h1>
          <div className="w-16 h-[3px] bg-[#B87333] mx-auto"></div>
          <p className="mt-6 text-lg text-gray-500 font-light max-w-2xl mx-auto break-keep">
            견고한 파트너십과 수직계열화된 밸류체인으로 함께 성장하는 우림금속의 기업 네트워크를 소개합니다.
          </p>
        </div>

        {/* Network Structure Container */}
        <div className="w-full flex flex-col items-center relative mt-6">
          
          {/* Main Company Card (우림금속) */}
          <div className="relative z-10 max-w-2xl w-full bg-[#0A2342] rounded-2xl shadow-[0_20px_40px_rgba(10,35,66,0.15)] p-10 md:p-12 text-center border-b-4 border-[#B87333] transform transition-transform duration-500 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#B87333]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <p className="text-[#B87333] text-sm font-bold tracking-[0.2em] mb-2">{mainCompany.eng}</p>
            <h2 className="text-3xl md:text-4xl font-gmarket font-bold text-white mb-6 tracking-wide">
              {mainCompany.name}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light break-keep">
              {mainCompany.description}
            </p>
          </div>

          {/* Connection Lines */}
          <div className="hidden md:block relative w-full h-24 -mt-2 z-0">
             {/* 수직 중앙 선 */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[55%] bg-[#B87333]/30"></div>
             {/* 수평 분기 선 */}
             <div className="absolute top-[55%] left-[25%] right-[25%] h-px bg-[#B87333]/30"></div>
             {/* 좌측 하행 선 (주화금속) */}
             <div className="absolute top-[55%] left-[25%] w-px h-[45%] bg-[#B87333]/30"></div>
             {/* 우측 하행 선 (대승산업) */}
             <div className="absolute top-[55%] right-[25%] w-px h-[45%] bg-[#B87333]/30"></div>
          </div>
          
          {/* Mobile Connection Line */}
          <div className="md:hidden w-px h-16 bg-[#B87333]/30 -mt-2 mb-4 z-0 relative"></div>

          {/* Affiliates Grid (관계사) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-4xl relative z-10">
            {affiliates.map((affiliate) => (
              <div
                key={affiliate.id}
                className="group bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(10,35,66,0.1)] border border-gray-100 hover:border-[#B87333]/30 relative overflow-hidden"
              >
                {/* 상단 장식 바 (Hover 시 등장) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B87333] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* 아이콘 */}
                <div className="w-14 h-14 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0A2342] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#0A2342] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                
                <p className="text-[11px] text-gray-400 font-bold tracking-widest uppercase mb-2 group-hover:text-[#B87333]/80 transition-colors">{affiliate.eng}</p>
                <h3 className="text-2xl font-gmarket font-bold text-[#0A2342] mb-5">
                  {affiliate.name}
                </h3>
                <p className="text-gray-600 text-[15.px] leading-relaxed break-keep font-light">
                  {affiliate.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CompanyStructurePage;
