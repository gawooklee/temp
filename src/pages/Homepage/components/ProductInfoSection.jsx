import React, { useState } from 'react';
import springWasherImg from '@/assets/images/스프링와셔.png';
import waveWasherImg from '@/assets/images/웨이브와셔.png';
import springImg from '@/assets/images/스프링.png';

// --- 데이터 ---
const productData = [
  {
    imageSrc: springWasherImg, // public 폴더 기준
    name: '스프링와셔',
    subName: '(Spring Washer)',
    materials: '경강선, 스텐레스, 황동, 인청동'
  },
  {
    imageSrc: waveWasherImg,
    name: '웨이브[파셔]와셔',
    subName: '(Wave Spring Lock washer)',
    materials: '스프링강, 경강선, 스텐레스'
  },
  {
    imageSrc: springImg,
    name: '스프링',
    subName: '(Spring)',
    materials: '압축, 인장, 토션, 와이어'
  }
];

// --- 개별 부품 컴포넌트 ---

const ProductCard = ({ item }) => {
  const [imgError, setImgError] = useState(false);
  const placeholderImage = "/images/placeholder.png"; // 이미지가 없을 경우를 대비한 대체 이미지 경로

  return (
    <article className="flex flex-col flex-1 p-6 md:p-8 product-card-pattern bg-white" aria-label={item.name}>
      <div className="flex-1 flex flex-col">
        <div className="w-full mb-6 rounded-md overflow-hidden border border-gray-200 bg-white h-48 flex items-center justify-center">
          <img
            src={imgError ? placeholderImage : item.imageSrc}
            alt={item.name}
            // object-contain을 사용하면 이미지 비율을 유지하면서 컨테이너 안에 꽉 차지 않게 표시됩니다.
            // object-cover는 비율을 유지하면서 컨테이너를 꽉 채우므로, 이미지 일부가 잘릴 수 있습니다.
            // 둘 중 원하는 스타일을 선택하세요.
            className="object-contain pt-20" 
            loading="lazy"
            onError={() => setImgError(true)}
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900 leading-snug">{item.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.subName}</p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs font-semibold tracking-wide text-blue-700 mb-1">소재</p>
        <p className="text-sm text-gray-700 leading-relaxed">{item.materials}</p>
      </div>
    </article>
  );
};

const EquipmentCTA = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative rounded-md overflow-hidden flex flex-col border border-gray-200 bg-white h-full">
      <div
        className="flex-1 relative flex items-center justify-center text-center px-6 py-12 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/equipment_bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70" aria-hidden="true"></div>
        <div className="relative flex flex-col items-center max-w-xs">
          <button
            onClick={() => setOpen(o => !o)}
            className="px-6 py-3 border-2 md:border-4 border-white text-white font-bold tracking-wide rounded-md hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-4 focus:ring-white transition"
            aria-expanded={open}
            aria-controls="equipment-panel"
          >
            주요설비현황
          </button>
          <p className="text-white text-sm mt-4 leading-relaxed">주요 설비 상세를 펼쳐 생산 역량을 확인하세요.</p>
        </div>
      </div>
      <div
        id="equipment-panel"
        className={`bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!open}
      >
        <div className="p-6 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">보유 주요 설비</p>
            <ul className="list-disc list-inside space-y-1">
              <li>CNC 선반</li>
              <li>고속 프레스 설비</li>
              <li>열처리로 & 품질 검사라인</li>
              <li>정밀 3D 측정 시스템</li>
              <li>자동 비전 검사 시스템</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

const ResponsiveVideo = () => {
  const videoId = 'yk7k2XNFHRw';
  const videoParams = 'autoplay=1&mute=1&controls=0&loop=1&playlist=' + videoId;

  return (
    <div className="rounded-md overflow-hidden border border-gray-200 bg-black video-wrapper" aria-label="회사 소개 영상">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?${videoParams}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

// --- 섹션 조립 컴포넌트 ---

const ProductShowcase = () => {
  return (
    <section aria-labelledby="product-showcase-title" className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
      <h2 id="product-showcase-title" className="sr-only">제품 쇼케이스</h2>
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {productData.map(item => (
          <div key={item.name} className="flex-1 flex">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

const InfoAndMedia = () => {
  return (
    <section aria-labelledby="info-media-title" className="mt-12 md:mt-16">
      <h2 id="info-media-title" className="sr-only">회사 정보 및 미디어</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ResponsiveVideo />
        <EquipmentCTA />
      </div>
    </section>
  );
};


// --- 최종 내보내기 컴포넌트 ---

export default function ProductInfoSection() {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-gmarket font-bold text-[#0A2342] mb-4">우리의 제품</h2>
          {/* ★★★ 색상 변경 ★★★ */}
          <div className="w-20 h-1 bg-[#B87333] mx-auto"></div>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            정밀한 제조 역량을 바탕으로 신뢰할 수 있는 다양한 제품을 제공합니다.
          </p>
        </header>
        
        {/* <ProductShowcase /> */}
        <InfoAndMedia />
      </div>
    </div>
  );
}