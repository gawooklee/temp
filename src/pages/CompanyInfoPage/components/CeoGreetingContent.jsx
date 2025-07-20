import React from 'react';

import ceoImage from '@/assets/images/ceoImage.jpeg';

const ceoData = {
  headline: {
    normalPrefix: '우림금속은',
    highlightedWords: '근면, 성실, 책임의',
    normalSuffix: ' 정신으로 미래 소재 산업의 선도 기업으로 나아가겠습니다.'
  },
  subHeadline: '우림금속은 창립 이래 한결같은 자세로 동 및 동합금 소재 산업의 핵심 역할을 수행하며, 대한민국 산업의 기반을 함께 세워왔습니다.',
  bodyParagraphs: [
    '끊임없는 연구개발과 품질 개선, 고객 만족을 향한 진심 어린 노력은 곧 우림금속의 역사이며, 그 중심에는 근면과 성실, 그리고 책임감 있는 자세가 자리하고 있습니다.',
    '우림금속의 성장은 단순한 숫자가 아닌, 수많은 고객의 신뢰와 임직원의 땀방울이 모여 이뤄낸 결실입니다. 우리는 이 신뢰를 지키기 위해 지금 이 순간에도 혁신을 멈추지 않으며, 더 높은 기준의 품질과 서비스로 보답하고자 합니다.',
    '앞으로도 우림금속은 근면함으로 기술을 다듬고, 성실함으로 관계를 지키며, 책임감으로 사회에 기여하는 기업으로 지속 성장해 나가겠습니다.',
    '글로벌 시장에서도 대한민국 소재 산업의 위상을 높이는 기업, 우림금속의 이름이 신뢰의 상징으로 자리매김할 수 있도록 전 임직원이 최선을 다할 것을 약속드립니다.',
    '변함없는 관심과 성원을 부탁드리며, 우림금속의 내일을 함께 응원해주시길 바랍니다.'
  ],
  signature: {
    title: '회장',
    name: '홍 철기'
  },
  imageSrc: ceoImage
};


export default function CeoGreetingContent() {
  return (
    <div className="bg-white py-12">
      {/* ★★★★★ 수정된 부분 ★★★★★ */}
      {/* 기존 'lg:' 접두사를 모두 'min-[900px]:'으로 변경합니다. */}
      <div className="flex flex-col min-[1400px]:flex-row items-center min-[1400px]:gap-16">
        
        {/* --- 좌측 컬럼: 이미지 영역 --- */}
             {/* --- 좌측 컬럼: 이미지 영역 --- */}
        <div className="w-full min-[900px]:w-2/5 flex-shrink-0 mb-10 min-[1400px]:mb-0">
          <div className="relative mx-auto w-80">
            {/* ★★★★★ 수정 2: rounded-3xl 로 변경 ★★★★★ */}
            {/* 장식용 원형 배경도 이미지와 동일하게 부드러운 사각형으로 변경합니다. */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-3xl bg-gray-100 z-0"></div>
            
            {/* CEO 이미지 */}
            <img 
              src={ceoData.imageSrc} 
              alt={ceoData.signature.name}
              // ★★★★★ 수정 3: rounded-3xl 로 변경 ★★★★★
              // 이미지를 부드러운 모서리의 사각형으로 만듭니다.
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-lg" 
            />
          </div>
        </div>

        {/* --- 우측 컬럼: 텍스트 영역 --- */}
        <div className="w-full min-[1400px]:w-3/5 px-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">안녕하십니까?</h2>
              <p className="mt-2 text-gray-600">{ceoData.subHeadline}</p>
            </div>
            
            <hr className="border-gray-200" />
            
            <div>
              <h3 className="text-xl font-bold text-blue-800 leading-relaxed">
                {ceoData.headline.normalPrefix}
                <span className="text-blue-600"> {ceoData.headline.highlightedWords}</span>
                {ceoData.headline.normalSuffix.replace(ceoData.headline.highlightedWords, '')}
              </h3>
              <div className="mt-4 space-y-5 text-gray-700 leading-relaxed">
                {ceoData.bodyParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 하단 서명 영역 --- */}
      <div className="mt-12 text-right pr-8">
        <span className="text-lg text-gray-600">{ceoData.signature.title}</span>
        <span className="ml-4 text-2xl font-bold text-gray-900">{ceoData.signature.name}</span>
      </div>
    </div>
  );
}