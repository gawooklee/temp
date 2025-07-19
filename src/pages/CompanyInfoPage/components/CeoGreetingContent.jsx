import React from 'react';

// 데이터는 컴포넌트 파일 상단이나 별도의 파일에서 불러올 수 있습니다.
import ceoImage from '@/assets/images/ceoImage.jpeg';

const ceoData = {
  headline: {
    normalPrefix: '우림금속은',
    highlightedWords: '인화, 성실, 창의의',
    normalSuffix: '사훈을 바탕으로 더욱 발전해 가겠습니다.'
  },
  subHeadline: '최고의 품질로 동 및 동합금봉 시장에서 기초 소재 산업에 일익을 담당하고 있는 우림금속은 앞으로도 눈부시게 발전하여 초 일류 기업으로 성장할 것을 약속드립니다.',
  bodyParagraphs: [
    '우림금속 홈페이지를 찾아주신 고객 여러분들께 진심으로 감사의 말씀을 드립니다. 1987년 우림금속 설립이래 지금까지 우리가 걸어온 길을 생각해보면 감회가 새롭습니다. 역사는 결코 길다고 표현할 수 없지만 그 동안 이룬 성과를 보면 얼마나 많은 분들의 노력이 있었는지 짐작할 수 있습니다. 이 모든 결과는 우리가 흘린 땀의 의미를 값진 것으로 알아주신 많은 분들의 격려와 성원 덕분이었음을 다시 한 번 가슴 깊이 새겨봅니다.',
    '2009년 시화공장으로 이전을 재도약의 발판으로 삼아 신소재개발을 위한 투자와 연구개발을 계속하고 진취적인 사고로 장인의 혼이 담긴 최고의 제품을 생산, 공급하여 수요자의 이익증대에 더욱 최선을 다하겠습니다.',
    '또한 저희 우림금속 임직원 모두는 글로벌시대를 선도하는 기업역할에 정진할 것이며 소재의 생산, 공급을 통하여 세계 속에 한국기업의 위상을 드높일 것을 약속드립니다.',
    '여러분의 변함없는 성원과 관심 그리고 사랑을 부탁드립니다.'
  ],
  signature: {
    title: '회장',
    name: '홍 철기' // 예시 이름입니다.
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
      <div className="mt-12 text-right">
        <span className="text-lg text-gray-600">{ceoData.signature.title}</span>
        <span className="ml-4 text-2xl font-bold text-gray-900">{ceoData.signature.name}</span>
      </div>
    </div>
  );
}