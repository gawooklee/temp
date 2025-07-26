import React from 'react';

import copperRodImage from '@/assets/images/general-brass.jpg'

// 순동봉 제품 데이터
const copperRodData = {
  id: 'copper-rod',
  name: '순동봉 (Copper Rod)',
  description: '순도 99.90% 이상의 전기동(ETP)으로 만들어진 고품질 순동봉입니다. 산업 표준(IACS) 대비 101%에 달하는 최고 수준의 전기전도율과 뛰어난 열전도율을 자랑합니다. 또한 내식성이 우수하고 가공, 압출, 단조 등 다양한 가공에 용이하여 여러 산업 분야의 핵심 소재로 사용됩니다.',
  applications: [
    '전기 부품 및 전력 설비 부품 (버스바, 접지봉 등)',
    '방식 장치, 전기 모터, 트랜스포머',
    '열전도율이 중요시되는 열교환기 부품',
    '정밀 기계 가공 및 산업용 부품',
  ],
  imageSrc: copperRodImage, 
  specs: {
    properties: [
      { property: '구리(Cu) 함량', value: '99.90% 이상' },
      { property: '전기전도율 (IACS)', value: '~101% (C11000)' },
      { property: '열전도율 (W/m·K)', value: '390 ~ 400' },
      { property: '밀도 (g/cm³)', value: '약 8.9' },
    ],
    standards: [
      { property: '대표 재질', value: 'ETP (C11000), TP (C10200)' },
      { property: '재질 표준', value: 'ASTM B187, B152, JIS H3250' },
      { property: '제공 형태', value: '원형, 사각, 육각, 플랫바 등' },
      { property: '표면 처리', value: '연마, 산세 (필요 시)' },
    ]
  }
};


const CopperRodDetails = () => {
  const product = copperRodData;

  return (
    <div className="w-full bg-gray-50 px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* 제품 타이틀 */}
        <div className="mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="mt-1 text-lg text-orange-600">ETP Copper Rod / C1100</p>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              
              {/* 좌측: 설명, 용도 */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">제품 설명</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">주요 용도</h3>
                  <ul className="space-y-2 text-gray-600">
                    {product.applications.map((app, index) => (
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
                 <img src={product.imageSrc} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-xl" />
              </div>
            </div>

            {/* 하단: 스펙 테이블 */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">주요 특성 및 제품 규격</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 주요 특성 테이블 */}
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-700 mb-2 text-center">Key Properties</h4>
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2">항목</th><th className="p-2">값</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specs.properties.map(spec => (
                        <tr key={spec.property} className="border-t">
                          <td className="p-2">{spec.property}</td><td className="p-2 font-mono">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* 제품 규격 테이블 */}
                <div className="bg-white p-4 rounded-lg border">
                   <h4 className="font-semibold text-gray-700 mb-2 text-center">Product Standards</h4>
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-2">항목</th><th className="p-2">내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specs.standards.map(spec => (
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
      </div>
    </div>
  );
};

export default CopperRodDetails;