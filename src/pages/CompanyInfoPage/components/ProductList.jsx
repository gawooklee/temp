import React from 'react';
import copperCathode from '@/assets/images/copper-cathode.png';
import brassRods from '@/assets/images/brass-rods.jpg';
import usedBrass from '@/assets/images/used-brass.jpeg';

import millberry from '@/assets/images/millberry.avif';



// 제품 데이터를 이곳에 정의합니다. 이미지 경로는 실제 프로젝트에 맞게 수정해야 합니다.
const productsData = [
  {
    id: 1,
    name: '전기동',
    description: '순도 99.99%의 A Grade 전기동이며, 표면이 심하게 부식되어서는 안됩니다. 최고 등급의 원자재입니다.',
    imageSrc: copperCathode, 
  },
  {
    id: 2,
    name: 'A절봉',
    description: '밸브류, 봉류, 단조가공한 신주를 말하며 공장에서 불량으로 나온 제품을 일컫습니다. 한 번도 사용하지 않은 신주를 의미합니다.',
    imageSrc: brassRods, 
  },
  {
    id: 3,
    name: 'B절봉',
    description: '실생활에서 사용하고 수거하여 철분, 플라스틱, 스텐 등 이물질을 완전 제거한 상태를 흔히 B절봉이라 합니다.',
    imageSrc: usedBrass, // 예시 경로
  },
  {
    id: 4,
    name: '신분(나이트)',
    description: '밸브류, 봉류 단조 및 절삭 가공 시 나오는 칩(Chip) 형태의 원자재를 말합니다.',
    imageSrc: '/images/products/brass-chips.jpg', // 예시 경로
  },
  {
    id: 5,
    name: '노베1종',
    description: '아연 함유량이 5%~20% 이내, 나머지 구리 함유량이 80% 이상인 제품입니다. 공장 제품 불량 혹은 펀치밥 등을 일컬으며, 함 색깔은 황금색처럼 노란빛을 띕니다.',
    imageSrc: '/images/products/yellow-brass-1.jpg', // 예시 경로
  },
  {
    id: 6,
    name: '노베2종',
    description: '위의 내용과 상이하며 실생활에 사용했던 제품들을 수거하여 이물질을 완전 제거한 상태를 흔히 노베2종이라고도 합니다.',
    imageSrc: '/images/products/yellow-brass-2.jpg', // 예시 경로
  },
  {
    id: 7,
    name: '실노베 (실신주)',
    description: '노베류의 제품을 가공하다보면 구리 함유량이 많아서 끊어지지 않고 머리카락처럼 와이어 형태를 띄는 것을 말합니다.',
    imageSrc: '/images/products/brass-wire.jpg', // 예시 경로
  },
  {
    id: 8,
    name: '밀베리',
    description: '전선 및 케이블의 피복을 제거하여 얻은 순수한 구리선으로, 구리 스크랩 중 가장 등급이 높고 가치가 있는 최고급 원료입니다. 오염이나 부식이 없고 특유의 밝은 광택을 유지하는 것이 특징입니다.',
    imageSrc: millberry, // 예시 경로
  },
];


const ProductList = () => {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 컴포넌트 헤더 */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">취급 품목</h2>
          <p className="mt-2 text-gray-500">우림금속은 최고 품질의 다양한 원자재를 취급하고 있습니다.</p>
        </div>

        {/* 제품 목록 테이블 */}
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          {/* 테이블 헤더 */}
          <div className="grid grid-cols-6 md:grid-cols-12 gap-4 bg-gray-50 p-4 font-bold text-gray-600 text-sm">
            <div className="col-span-2 md:col-span-2">종류</div>
            <div className="col-span-4 md:col-span-7">원자재 특징</div>
            <div className="hidden md:block md:col-span-3 text-center">원자재 사진</div>
          </div>

          {/* 테이블 내용 (map으로 렌더링) */}
          <div className="divide-y divide-gray-200">
            {productsData.map((product) => (
              <div key={product.id} className="grid grid-cols-6 md:grid-cols-12 gap-4 p-4 items-center">
                {/* 1. 종류 */}
                <div className="col-span-6 md:col-span-2">
                  <p className="font-bold text-base text-gray-800">{product.name}</p>
                </div>
                
                {/* 2. 원자재 특징 */}
                <div className="col-span-6 md:col-span-7">
                  <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                </div>
                
                {/* 3. 원자재 사진 */}
                <div className="col-span-6 md:col-span-3 flex justify-center">
                  <img 
                    src={product.imageSrc} 
                    alt={product.name} 
                    className="w-full md:w-32 h-24 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductList;