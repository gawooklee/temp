import React from 'react';

// 인재상 데이터: 각 가치를 상징하는 아이콘과 색상 그라데이션
const talentData = [
  {
    id: 'contribution',
    title: '세상에 기여하는 사람',
    description: '자신의 역량을 발휘하여 기업의 성과를 넘어, 사회 전체에 긍정적인 가치를 만들어내는 사람',
    keywords: '도전 · 협력 · 탐구',
    color: 'from-blue-600 to-blue-500',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18" /></svg>
  },
  {
    id: 'respect',
    title: '존중으로 함께하는 사람',
    description: '고객, 동료, 그리고 우리 자신을 향한 깊은 이해와 공감으로 신뢰의 문화를 만들어가는 사람',
    keywords: '신뢰 · 진정성 · 인내',
    color: 'from-teal-600 to-teal-500',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    id: 'gratitude',
    title: '감사로 성장하는 사람',
    description: '겸손한 마음으로 모든 경험에서 배우고, 긍정적인 에너지를 나누며 함께 나아가는 사람',
    keywords: '겸손 · 성찰 · 혁신',
    color: 'from-indigo-600 to-indigo-500',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 12v4m-2-2h4M17 3l-1.17.585A2 2 0 0014.28 5.88l-1.12 2.24a1 1 0 01-1.34.45L9 7.5l-1.12 2.24a1 1 0 01-1.34.45L4.5 9.14a2 2 0 00-2.36 2.06l.54 3.24a1 1 0 00.95.86h8.74a1 1 0 00.95-.86l.54-3.24a2 2 0 00-2.36-2.06l-2.02.67z" /></svg>
  },
];

// 각 인재상 카드를 위한 재사용 컴포넌트
const TalentCard = ({ talent }) => (
  <div className="flex flex-col items-center text-center">
    <div className={`
      w-72 h-72 rounded-full bg-gradient-to-br ${talent.color} 
      flex flex-col justify-center items-center p-8 
      text-white shadow-xl cursor-pointer 
      transition-all duration-300 hover:scale-105 hover:shadow-2xl
    `}>
      {talent.icon}
      <h4 className="mt-3 font-bold text-xl">{talent.title}</h4>
      <p className="mt-2 text-sm opacity-90">{talent.description}</p>
    </div>
    <p className="mt-6 text-base font-semibold text-gray-500 tracking-wider">
      {talent.keywords}
    </p>
  </div>
);


const IdealTalentProfile = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">우리가 꿈꾸는 인재</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            우리는 사람을 가장 소중한 가치로 여기며 함께 성장합니다.
          </p>
        </div>

        {/* 
          메인 콘텐츠 영역
          - Flexbox와 wrap을 사용하여 유연한 레이아웃 구현
        */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
          {talentData.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default IdealTalentProfile;