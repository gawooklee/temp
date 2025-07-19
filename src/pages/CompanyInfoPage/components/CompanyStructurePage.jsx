import React, { useState } from 'react';

const CompanyStructurePage = () => {
  const [mainCompany] = useState({
    id: 'main',
    name: '메인 코퍼레이션',
    description: '혁신적인 기술과 고객 중심의 서비스로 미래를 선도하는 기업입니다.',
  });

  const [affiliates] = useState([
    {
      id: 'affiliate1',
      name: '솔루션 테크',
      description: '최첨단 소프트웨어 개발 및 디지털 솔루션 전문 기업입니다.',
    },
    {
      id: 'affiliate2',
      name: '미래 투자 그룹',
      description: '유망 스타트업 발굴 및 전략적 투자를 통해 성장을 지원합니다.',
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          우리 회사 및 계열사
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          견고한 파트너십으로 함께 성장하는 우리의 기업 구조를 소개합니다.
        </p>
      </div>

      {/* Main Company Card */}
      <div className="max-w-xl w-full bg-white rounded-xl shadow-xl p-8 mb-12 flex flex-col items-center text-center border-b-4 border-blue-600 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Placeholder for logo */}
        <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl w-24 h-24 flex items-center justify-center mb-6"></div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          {mainCompany.name}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {mainCompany.description}
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
          회사 소개 보기
        </button>
      </div>

      {/* Affiliates Section */}
      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Vertical line connecting main to affiliates */}
        <div className="relative w-1 h-16 bg-gray-300 mb-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {affiliates.map((affiliate) => (
            <div
              key={affiliate.id}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-blue-400"
            >
              {/* Placeholder for logo */}
              <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl w-20 h-20 flex items-center justify-center mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {affiliate.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {affiliate.description}
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors duration-200">
                자세히 알아보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyStructurePage;
