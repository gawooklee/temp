import React, { useState } from 'react';


  // [수정] 비금속 원자재 판매 기업의 상황에 맞는 Q&A 데이터
const qnaData = [
  {
    id: 1,
    question: '원하는 규격(사이즈)으로 주문 제작이 가능한가요?',
    answer: '네, 가능합니다. 황동봉, 순동판 등 주요 품목에 대해 고객사에서 요청하시는 길이, 폭, 두께 등 다양한 규격으로 절단 및 가공이 가능합니다. 다만, 주문 제작의 경우 최소주문수량(MOQ)이 적용될 수 있으니, 자세한 내용은 영업팀과 상의해주시기 바랍니다.'
  },
  {
    id: 2,
    question: '배송 가능 지역과 소요 기간은 어떻게 되나요?',
    answer: '전국 대부분 지역에 배송이 가능하며, 재고가 있는 품목의 경우 발주 확인 후 평균 2~3 영업일이 소요됩니다. 배송은 경동화물, 대신화물을 통해 출고되며 운임은 착불을 원칙으로 합니다. 일정 조율 후 공장 방문 수령도 가능합니다.'
  },
  {
    id: 3,
    question: '제품의 시험성적서(밀시트)를 받을 수 있나요?',
    answer: '네, 요청 시 모든 제품에 대해 화학성분, 기계적 특성 등이 포함된 시험성적서(Mill Sheet)를 함께 제공해 드리고 있습니다. 발주 시 필요 여부를 미리 말씀해주시면 더욱 신속한 처리가 가능합니다.'
  },
  {
    id: 4,
    question: '견적 문의 및 주문은 어떻게 진행되나요?',
    answer: '전화(02-898-4062) 또는 이메일(woorim4062@ecount.co.kr)로 원하시는 품목, 규격, 수량을 알려주시면 담당자가 신속하게 견적을 회신해 드립니다. 온라인 문의 폼을 이용하시면 더욱 편리합니다. 견적 확인 후 발주를 진행하시면 됩니다.'
  },
];


const QnaAccordion = () => {
  // [2] 어떤 질문이 열려있는지 기억하기 위한 state
  const [openId, setOpenId] = useState(null);

  // [3] 질문을 클릭했을 때 실행될 함수
  const toggleQuestion = (id) => {
    // 이미 열려있는 질문을 다시 클릭하면 닫고, 다른 질문을 클릭하면 그 질문을 엽니다.
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">자주 묻는 질문 (Q&A)</h2>

      <div className="space-y-3">
        {qnaData.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            {/* 질문 영역 (버튼) */}
            <button
              onClick={() => toggleQuestion(item.id)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <span>{item.question}</span>
              {/* 아이콘: 열려있으면 위쪽 화살표, 닫혀있으면 아래쪽 화살표 */}
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${openId === item.id ? 'transform rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {/* 답변 영역 (열렸을 때만 보임) */}
            {openId === item.id && (
              <div className="p-4 bg-white text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnaAccordion;