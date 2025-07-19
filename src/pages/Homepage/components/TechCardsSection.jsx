import { useState } from 'react';

export default function TechCardsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: '품질 보증',
      description: '엄격한 품질 검사를 통해 고객에게 최상의 제품만을 공급합니다.',
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 2,
      title: '안정적 공급',
      description: '대규모 재고 보유로 언제든지 안정적으로 제품을 공급합니다.',
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: '기술 혁신',
      description: '지속적인 기술 개발로 고객의 다양한 요구에 부응합니다.',
      icon: (
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
     
          <h2 className="text-3xl md:text-4xl font-gmarket font-bold text-[#0A2342] mb-4">핵심 기술력</h2>
          {/* ★★★ 색상 변경 ★★★ */}
          <div className="w-20 h-1 bg-[#B87333] mx-auto"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            25년 전통의 기술력으로 최고의 품질을 보증합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              // 애니메이션을 위해 className="card-fade-in" 추가
              className={`card-fade-in relative bg-white p-10 border-2 border-gray-200 text-center transition-all duration-300 cursor-pointer overflow-hidden ${
                hoveredCard === card.id ? 'transform -translate-y-1 shadow-2xl border-gray-300' : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300"></div>
              </div>
              
              {/* ★★★ 색상 변경 ★★★ */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform transition-transform duration-300 ${
                hoveredCard === card.id ? 'scale-x-100' : 'scale-x-0'
              }`}></div>

              <div className="relative z-10 mb-8">
                <div className={`bg-gradient-to-br from-gray-800 to-gray-900 w-24 h-24 flex items-center justify-center mx-auto shadow-xl transform transition-all duration-300 ${
                  hoveredCard === card.id ? 'shadow-2xl scale-105' : ''
                }`}>
                  <div className={`transform transition-all duration-300 ${hoveredCard === card.id ? 'scale-110' : ''}`}>
                    {card.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 tracking-wide uppercase">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10 text-base">
                {card.description}
              </p>

              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-gray-400"></div>
                  ))}
                </div>
              </div>

              {/* ★★★ 색상 변경 ★★★ */}
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent opacity-0 transition-opacity duration-300 ${
                hoveredCard === card.id ? 'opacity-100' : ''
              }`}></div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border-t-2 border-gray-300 pt-8">
            {/* ★★★ 색상 변경 ★★★ */}
            <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-gray-600 uppercase tracking-wider text-sm font-semibold">년 전통</div>
          </div>
          <div className="border-t-2 border-gray-300 pt-8">
            {/* ★★★ 색상 변경 ★★★ */}
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600 uppercase tracking-wider text-sm font-semibold">고객사</div>
          </div>
          <div className="border-t-2 border-gray-300 pt-8">
            {/* ★★★ 색상 변경 ★★★ */}
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600 uppercase tracking-wider text-sm font-semibold">품질 만족도</div>
          </div>
        </div>
      </div>
    </section>
  );
}