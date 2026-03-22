import React from 'react';

// 조직도 데이터를 이곳에 정의합니다.
const orgData = {
  ceo: { title: '대표 이사', eng: 'CEO' },
  topTier: [
    { title: '이사회', eng: 'Board of Directors' },
    { title: '감사', eng: 'Auditor' },
  ],
  departments: [
    { title: '기술연구소', eng: 'R&D Center', teams: ['연구개발팀', '신제품개발팀'] },
    { title: '경영지원본부', eng: 'Management', teams: ['지원팀', '재경팀'] },
    { title: '영업본부', eng: 'Sales Division', teams: ['영업관리팀', '국내영업팀', '해외영업팀'] },
    { title: '생산본부', eng: 'Production', teams: ['생산관리팀', '공무팀', '생산팀', '전기팀'] },
    { title: '품질 환경 안전위원회', eng: 'QHSE Committee', teams: ['품질관리팀'] },
  ],
};

const OrganizationChart = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-24 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#B87333] font-bold tracking-widest uppercase text-sm mb-3 block">Organization</span>
          <h2 className="text-3xl md:text-5xl font-gmarket font-bold text-[#0A2342] mb-6">조직도</h2>
          <div className="w-16 h-[3px] bg-[#B87333] mx-auto"></div>
          <p className="text-gray-500 font-light mt-6 text-lg">우림금속의 체계적이고 전문적인 조직 구성입니다.</p>
        </div>

        {/* Chart Structure */}
        <div className="flex flex-col items-center relative">
          
          {/* Level 1: CEO & Board/Auditor */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14 w-full max-w-4xl mb-8 md:mb-16 relative">
            
            {/* 데스크탑 화면에서의 수평 연결선 */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gray-300 -z-10"></div>

            {/* 이사회 (Board) */}
            <div className="w-48 bg-white border border-gray-200 rounded-xl shadow-sm text-center py-5 px-4 z-10 transition-transform hover:-translate-y-1 hover:shadow-md order-2 md:order-1">
              <p className="text-[11px] text-gray-400 font-bold mb-1.5 uppercase tracking-widest">{orgData.topTier[0].eng}</p>
              <h3 className="text-lg font-bold text-[#0A2342]">{orgData.topTier[0].title}</h3>
            </div>

            {/* 대표이사 (CEO) */}
            <div className="w-64 bg-[#0A2342] border-b-4 border-[#B87333] rounded-2xl shadow-[0_15px_30px_rgba(10,35,66,0.2)] text-center py-8 px-4 z-10 transform scale-105 md:scale-110 order-1 md:order-2 relative">
              <p className="text-[#B87333] text-xs font-bold mb-2 uppercase tracking-widest">{orgData.ceo.eng}</p>
              <h3 className="text-2xl font-gmarket font-bold text-white tracking-wide">{orgData.ceo.title}</h3>
              
              {/* 아래쪽 본부로 향하는 수직 연결선 */}
              <div className="hidden md:block absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gray-300"></div>
            </div>

            {/* 감사 (Auditor) */}
            <div className="w-48 bg-white border border-gray-200 rounded-xl shadow-sm text-center py-5 px-4 z-10 transition-transform hover:-translate-y-1 hover:shadow-md order-3 md:order-3">
              <p className="text-[11px] text-gray-400 font-bold mb-1.5 uppercase tracking-widest">{orgData.topTier[1].eng}</p>
              <h3 className="text-lg font-bold text-[#0A2342]">{orgData.topTier[1].title}</h3>
            </div>
          </div>

          {/* Level 2: Departments */}
          <div className="w-full relative mt-8 md:mt-0">
            {/* 데스크탑에서 부서들 위를 감싸는 수평 연결선 */}
            <div className="hidden lg:block absolute top-0 left-[10%] right-[10%] h-px bg-gray-300"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 xl:gap-6 pt-0 lg:pt-8 relative z-10">
              {orgData.departments.map((dept, index) => (
                <div key={index} className="relative flex flex-col items-center group">
                  {/* 각 부서 위로 올라가는 짧은 수직 연결선 */}
                  <div className="hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-300 transition-colors duration-300 group-hover:bg-[#B87333]"></div>
                  
                  <div className="w-full h-full bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(10,35,66,0.1)] hover:border-[#B87333]/40 flex flex-col">
                    {/* 부서 헤더 */}
                    <div className="bg-gray-50 px-5 py-5 border-b border-gray-100 group-hover:bg-[#0A2342] transition-colors duration-300 text-center lg:text-left">
                      <p className="text-[10px] text-gray-500 font-bold mb-1.5 uppercase tracking-widest group-hover:text-[#B87333]/90 transition-colors">{dept.eng}</p>
                      <h4 className="text-[15px] xl:text-lg font-bold text-[#0A2342] group-hover:text-white transition-colors break-keep">{dept.title}</h4>
                    </div>
                    {/* 부서 소속 팀 리스트 */}
                    <div className="px-5 py-6 flex-grow bg-white">
                      <ul className="space-y-3.5">
                        {dept.teams.map((team, idx) => (
                          <li key={idx} className="flex items-start text-[14px] text-gray-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B87333] mr-3 mt-1.5 opacity-80 shrink-0"></span>
                            <span className="break-keep">{team}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;