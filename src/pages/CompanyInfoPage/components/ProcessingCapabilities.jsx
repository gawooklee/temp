import React from 'react';
import rolling from '@/assets/images/rolling.webp'
import slitting from '@/assets/images/slitting.webp'
import tinPlating from '@/assets/images/tin-plating.jpg'


// 공정 데이터를 이곳에 정의합니다. 이미지 경로는 실제 프로젝트에 맞게 수정해야 합니다.
const processingData = [
  {
    id: 'rolling',
    title: '압연 (ROLLING)',
    imageSrc: rolling, 
    imageAlt: '압연 라인',
    specs: [
      { label: '품종', value: '동 및 동합금' },
      { label: '생산두께', value: '0.03mm ~ 1.0mm' },
      { label: '생산폭', value: 'MAX 250mm' },
    ],
  },
  {
    id: 'slitting',
    title: '슬리팅 (SLITTING)',
    imageSrc: slitting, // 예시 경로
    imageAlt: '슬리팅 공정',
    specs: [
      { label: '품종', value: '동 및 동합금, 주석도금제품' },
      { label: '생산두께', value: '0.03mm ~ 1.5mm' },
      { label: '생산폭', value: '5mm ~ 600mm' },
    ],
  },
  {
    id: 'tin-plating',
    title: '주석도금 (TIN PLATING)',
    imageSrc: tinPlating, // 예시 경로
    imageAlt: '주석도금 공정',
    specs: [
      { label: '품종', value: '동 및 동합금 코일에 주석도금' },
      { label: '도금방식', value: '동하지 도금 후 주석 도금' },
      { label: '도금생산 종류', value: 'MATTE(무광), REFLOW(유광)' },
      { label: '도금두께', value: '동하지도금(0.5㎛~1.0㎛), 주석도금 (무광 MAX 3㎛, 유광 MAX 2㎛)' },
      { label: '생산폭', value: 'MAX 310mm' },
    ],
  },
  {
    id: 'traverse-winding',
    title: '트래버스 와인딩 (TRAVERSE WINDING)',
    imageSrc: '/images/processes/traverse-winding.avif', // 예시 경로
    imageAlt: '트래버스 와인딩',
    specs: [
        { label: '품종', value: '동 및 동합금 코일' },
        { label: '생산두께', value: '0.15mm~0.8mm' },
        { label: '생산폭', value: '10mm~50mm' },
        { label: '생산중량', value: 'MAX 500kg/BOBBIN' },
    ],
  },
  {
    id: 'de-tin',
    title: '주석박리 (DE-TIN)',
    imageSrc: '/images/processes/de-tin.jpg', // 예시 경로
    imageAlt: '주석박리 공정',
    specs: [
        { label: '공정 설명', value: '도금 또는 슬리팅 시 발생하는 주석도금 코일을 주석박리액을 통해 제거하여 원자재로 재생하는 공정입니다.' },
    ],
  },
];


const ProcessingCapabilities = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 컴포넌트 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-orange-600 tracking-wide uppercase">특수소재 가공</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            핵심 가공 기술 및 생산 규격
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            정밀한 기술력으로 고객의 요구사항을 만족시키는 특수소재 가공 공정입니다.
          </p>
        </div>

        {/* 공정 목록 */}
        <div className="space-y-16 lg:space-y-24">
          {processingData.map((process, index) => (
            <div 
              key={process.id} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* 이미지 영역 (홀/짝수 번째에 따라 위치 변경) */}
              <div className={`
                ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
              `}>
                <img 
                  src={process.imageSrc} 
                  alt={process.imageAlt}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>

              {/* 텍스트 정보 영역 */}
              <div className={`
                ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
              `}>
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">{process.title}</h3>
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <dl className="space-y-4">
                    {process.specs.map(spec => (
                      <div key={spec.label} className="flex">
                        <dt className="w-28 flex-shrink-0 font-semibold text-gray-700">{spec.label}</dt>
                        <dd className="text-gray-600">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProcessingCapabilities;