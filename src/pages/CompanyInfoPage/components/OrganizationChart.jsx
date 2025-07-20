import React from 'react';

// 조직도 데이터를 이곳에 정의합니다.
const orgData = {
  ceo: { title: '대표 이사', color: 'orange' },
  topTier: [
    { title: '이사회', color: 'green' },
    { title: '감사', color: 'red' },
  ],
  departments: [
    { title: '기술연구소', teams: ['연구개발', '신제품개발'], color: 'orange' },
    { title: '경영지원본부', teams: ['지원팀', '재경팀'], color: 'orange' },
    { title: '영업본부', teams: ['영업관리팀', '국내영업팀', '해외영업팀'], color: 'orange' },
    { title: '생산본부', teams: ['생산관리팀', '공무팀', '생산팀', '전기팀'], color: 'orange' },
    { title: '품질 환경 안전위원회', teams: ['품질관리팀'], color: 'orange' },
  ],
};

// 재사용 가능한 조직도 카드 컴포넌트
const OrgCard = ({ title, teams, color }) => {
  const colorStyles = {
    orange: 'bg-orange-500',
    green: 'bg-emerald-500',
    red: 'bg-rose-500',
  };
  const titleLines = title.split('/');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full transform transition-transform hover:-translate-y-1 hover:shadow-xl">
      <div className={`p-3 ${colorStyles[color]} text-white font-bold text-center text-sm md:text-base`}>
        {titleLines.map((line, i) => <p key={i}>{line}</p>)}
      </div>
      {teams && (
        <div className="p-4">
          <ul className="space-y-2 text-gray-600 text-sm">
            {teams.map((item, index) => (
              <li key={index} className="pl-3 border-l-2 border-gray-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// 계층을 설명하고 시각적 흐름을 유도하는 연결 컴포넌트
const HierarchyConnector = ({ text }) => (
  <div className="text-center text-slate-500 flex flex-col items-center space-y-3 my-4">
    <span className="text-2xl text-slate-400 font-light">↓</span>
    <p className="max-w-xl text-sm md:text-base">{text}</p>
  </div>
);


// 메인 조직도 컴포넌트
const OrganizationChart = () => {
  return (
    <div className="w-full bg-slate-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10">

        {/* 1. 최상위 계층: 대표 이사 */}
        <div className="w-full max-w-xs">
          <OrgCard title={orgData.ceo.title} color={orgData.ceo.color} />
        </div>
        
        {/* 설명 텍스트 1 */}
        <HierarchyConnector text="대표 이사의 리더십 아래, 주요 의사결정 기구인 이사회와 경영 활동의 투명성을 감독하는 감사가 위치합니다." />

        {/* 2. 차상위 계층: 이사회 & 감사 */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {orgData.topTier.map((item, index) => (
            <OrgCard key={index} title={item.title} color={item.color} />
          ))}
        </div>

        {/* 설명 텍스트 2 */}
        <HierarchyConnector text="이러한 감독 기구 아래, 회사의 핵심적인 기능을 수행하는 주요 본부 및 위원회가 운영됩니다." />

        {/* 3. 본부 및 위원회 계층 */}
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-700 mb-8 text-center">주요 본부 및 위원회</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {orgData.departments.map((dept, index) => (
              <OrgCard key={index} title={dept.title} teams={dept.teams} color={dept.color} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrganizationChart;