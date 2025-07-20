import React, { useState } from 'react';
import generalBrass from '@/assets/images/general-brass.jpg'
import highStrengthBrass from '@/assets/images/high-strength-brass.png'
import leadFreeBrass from '@/assets/images/lead-free-brass.jpg'


// 탭에 표시될 제품 데이터 (내용, 이미지, 스펙 등)
// 이미지 경로는 실제 프로젝트에 맞게 수정해야 합니다.
const productsData = [
  {
    id: 'copper-alloy',
    name: '구리 합금',
    description: '구리를 주성분으로 하여 아연(Zn), 주석(Sn) 등 다른 원소를 첨가하여 만든 합금입니다. 우수한 전기 및 열 전도성, 뛰어난 가공성 및 내식성을 자랑하며, 산업 전반에 걸쳐 가장 널리 사용되는 기초 소재입니다.',
    applications: [
      '전기/전자 부품 (단자, 커넥터, 배선기구)',
      '건축용 자재 (내/외장재, 지붕재, 문 손잡이)',
      '자동차 부품 (라디에이터, 열교환기)',
      '산업용 기계 부품 및 장식품',
    ],
    imageSrc: generalBrass, 
    specs: {
      chemical: [
        { element: 'Cu (구리)', value: '60.0 ~ 70.0%' },
        { element: 'Zn (아연)', value: '30.0 ~ 40.0%' },
        { element: 'Pb (납)', value: '0.5% 이하' },
        { element: 'Fe (철)', value: '0.1% 이하' },
      ],
      mechanical: [
        { property: '인장강도', value: '350 - 450 MPa' },
        { property: '항복강도', value: '120 - 200 MPa' },
        { property: '연신율', value: '40% 이상' },
        { property: '경도 (HV)', value: '80 - 120' },
      ],
    }
  },
  {
    id: 'high-strength-brass',
    name: '고력 황동',
    description: '일반 황동에 망간(Mn), 알루미늄(Al), 철(Fe) 등을 첨가하여 기계적 강도와 내마모성을 극대화한 특수 합금입니다. 높은 하중과 마찰을 견뎌야 하는 극한 환경에 최적화된 고성능 소재입니다.',
    applications: [
      '선박용 부품 (프로펠러, 축, 밸브)',
      '중장비 및 산업기계 부품 (기어, 베어링)',
      '유압 실린더 부품 및 펌프 부품',
      '고강도가 요구되는 구조용 자재',
    ],
    imageSrc: highStrengthBrass, 
    specs: {
      chemical: [
        { element: 'Cu (구리)', value: '55.0 ~ 62.0%' },
        { element: 'Zn (아연)', value: 'Remainder' },
        { element: 'Al (알루미늄)', value: '3.0 ~ 6.0%' },
        { element: 'Mn (망간)', value: '1.5 ~ 3.0%' },
        { element: 'Fe (철)', value: '1.0 ~ 2.5%' },
      ],
      mechanical: [
        { property: '인장강도', value: '600 - 750 MPa' },
        { property: '항복강도', value: '300 - 450 MPa' },
        { property: '연신율', value: '15 - 25%' },
        { property: '경도 (HV)', value: '180 - 220' },
      ],
    }
  },
  {
    id: 'lead-free-brass',
    name: '무연 황동',
    description: '인체에 유해한 납(Pb) 성분을 법적 기준치 이하로 제거하고, 대신 비스무트(Bi)나 실리콘(Si)을 첨가하여 절삭성과 주조성을 확보한 친환경 합금입니다. 특히 식수와 관련된 제품에 필수적으로 사용됩니다.',
    applications: [
      '수도꼭지 및 급수용 밸브',
      '수량계 및 각종 계량기 부품',
      '식음료 기기 및 의료 기기 부품',
      '환경 규제가 엄격한 모든 산업 분야',
    ],
    imageSrc: leadFreeBrass, // 예시 경로
    specs: {
      chemical: [
        { element: 'Cu (구리)', value: '59.0 ~ 63.0%' },
        { element: 'Zn (아연)', value: 'Remainder' },
        { element: 'Pb (납)', value: '< 0.25% (무연 기준)' },
        { element: 'Bi (비스무트)', value: '1.0 ~ 2.0%' },
      ],
      mechanical: [
        { property: '인장강도', value: '380 - 480 MPa' },
        { property: '항복강도', value: '140 - 220 MPa' },
        { property: '연신율', value: '35% 이상' },
        { property: '경도 (HV)', value: '90 - 130' },
      ],
    }
  },
];


const BrassRodTabs = () => {
  const [activeTab, setActiveTab] = useState(productsData[0].id);

  const activeProduct = productsData.find(p => p.id === activeTab);

  return (
    <div className="w-full bg-gray-50  px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* 탭 버튼 영역 */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            {productsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base transition-colors duration-200
                  ${activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* 탭 콘텐츠 영역 */}
        {activeProduct && (
          <div className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              
              {/* 좌측: 설명, 용도, 이미지 */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">제품 설명</h3>
                  <p className="text-gray-600 leading-relaxed">{activeProduct.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">주요 용도</h3>
                  <ul className="space-y-2 text-gray-600">
                    {activeProduct.applications.map((app, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 우측: 이미지 */}
              <div className="lg:col-span-2">
                 <img src={activeProduct.imageSrc} alt={activeProduct.name} className="w-full h-auto object-cover rounded-lg shadow-xl" />
              </div>
            </div>

            {/* 하단: 스펙 테이블 */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">화학성분 및 기계적 특성</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 화학 성분 테이블 */}
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-700 mb-2 text-center">Chemical Composition</h4>
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2">성분</th><th className="p-2">함량</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeProduct.specs.chemical.map(spec => (
                        <tr key={spec.element} className="border-t">
                          <td className="p-2">{spec.element}</td><td className="p-2 font-mono">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* 기계적 특성 테이블 */}
                <div className="bg-white p-4 rounded-lg border">
                   <h4 className="font-semibold text-gray-700 mb-2 text-center">Mechanical Properties</h4>
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2">특성</th><th className="p-2">값</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeProduct.specs.mechanical.map(spec => (
                        <tr key={spec.property} className="border-t">
                          <td className="p-2">{spec.property}</td><td className="p-2 font-mono">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrassRodTabs;