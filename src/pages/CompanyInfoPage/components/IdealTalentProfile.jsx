import React from 'react';

// 인재상 데이터: 기존의 캐주얼한 색상을 빼고 통일된 프리미엄 컬러(Navy+Bronze) 사용
const talentData = [
  {
    id: 'contribution',
    title: '세상에 기여하는 사람',
    enTitle: 'CONTRIBUTION',
    description: '기업의 성과를 넘어, 사회 전체에 긍정적인 가치를 만들어내는 인재',
    keywords: '도전 · 협력 · 탐구',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#B87333] mb-3 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18" /></svg>
  },
  {
    id: 'respect',
    title: '존중으로 함께하는 사람',
    enTitle: 'RESPECT',
    description: '깊은 이해와 공감으로 신뢰 중심의 기업 문화를 만들어가는 인재',
    keywords: '신뢰 · 진정성 · 인내',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#B87333] mb-3 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    id: 'gratitude',
    title: '감사로 성장하는 사람',
    enTitle: 'GRATITUDE',
    description: '경험에서 배우며, 긍정적인 에너지를 바탕으로 혁신을 선도하는 인재',
    keywords: '겸손 · 성찰 · 혁신',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#B87333] mb-3 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 12v4m-2-2h4M17 3l-1.17.585A2 2 0 0014.28 5.88l-1.12 2.24a1 1 0 01-1.34.45L9 7.5l-1.12 2.24a1 1 0 01-1.34.45L4.5 9.14a2 2 0 00-2.36 2.06l.54 3.24a1 1 0 00.95.86h8.74a1 1 0 00.95-.86l.54-3.24a2 2 0 00-2.36-2.06l-2.02.67z" /></svg>
  },
];

// 고급스러운 메탈릭 링/네이비 원형 디자인
const TalentCard = ({ talent }) => (
  <div className="flex flex-col items-center text-center group w-full max-w-[280px] xl:max-w-[320px]">
    
    {/* 아우터 장식용 링 (메탈릭 그라데이션) */}
    <div className="relative w-full aspect-square mx-auto rounded-full p-[2px] bg-gradient-to-br from-[#B87333]/40 via-[#0A2342]/10 to-[#B87333]/40 hover:from-[#B87333] hover:to-[#B87333] transition-all duration-700 shadow-xl overflow-hidden hover:scale-105 hover:shadow-[0_20px_40px_rgba(10,35,66,0.2)]">
      
      {/* 내부 원 (네이비 배경) */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0A2342] to-[#122e4d] flex flex-col justify-center items-center p-6 sm:p-8 text-white relative">
        
        {/* 아주 미세한 센터 광원 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.1)_0%,transparent_60%)] rounded-full"></div>
        
        {/* 콘텐츠 라인 */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {talent.icon}
          <h4 className="text-[10px] font-bold text-[#B87333] tracking-[0.2em] uppercase mb-1 sm:mb-2">{talent.enTitle}</h4>
          <h3 className="font-gmarket font-bold text-lg sm:text-xl mb-3 sm:mb-4">{talent.title}</h3>
          
          <div className="w-10 sm:w-12 h-[2px] bg-white/20 mb-3 sm:mb-4 group-hover:bg-[#B87333] transition-colors duration-500"></div>
          
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed break-keep px-2">
            {talent.description}
          </p>
        </div>
      </div>
    </div>
    
    {/* 외부 키워드 뱃지 */}
    <div className="mt-6 sm:mt-8 bg-white border border-[#0A2342]/10 shadow-sm px-6 py-3 rounded-full group-hover:border-[#B87333]/50 group-hover:-translate-y-1 transition-all duration-500 w-full max-w-[260px]">
      <p className="text-xs sm:text-sm font-bold text-[#0A2342] tracking-widest break-keep">
        {talent.keywords}
      </p>
    </div>
  </div>
);

const IdealTalentProfile = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-24 relative overflow-hidden">
      {/* 배경 장식 패턴 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#0A2342]/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#B87333]/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 섹션 헤더 - 홈페이지와 동일한 정갈한 스타일 적용 */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <span className="text-[#B87333] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Core Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-gmarket font-bold text-[#0A2342] mb-6">
            우리가 꿈꾸는 인재
          </h2>
          <div className="w-16 h-[3px] bg-[#B87333] mb-6"></div>
          <p className="text-gray-500 font-light text-lg break-keep max-w-2xl text-center">
            우림금속은 사람을 가장 소중한 가치로 여기며, <br className="hidden sm:block"/>
            신뢰와 존중을 바탕으로 무한한 가능성을 향해 함께 성장합니다.
          </p>
        </div>

        {/* 3단 동그라미 배치 (반응형 랩핑 지원) */}
        <div className="flex flex-wrap justify-center gap-10 xl:gap-14">
          {talentData.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default IdealTalentProfile;