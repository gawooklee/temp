import React from 'react';

// [1] 데이터: 실제로는 이 데이터를 API로부터 받아옵니다.
const noticesData = [
  { id: 1, category: '중요', title: '시스템 정기 점검 안내 (08/01 02:00 ~ 04:00)', date: '2025-07-26' },
  { id: 2, category: '업데이트', title: '신규 원자재 시세 정보 추가 안내', date: '2025-07-25' },
  { id: 3, category: '일반', title: '고객센터 운영 시간 변경 안내', date: '2025-07-24' },
  { id: 4, category: '이벤트', title: '신규 가입 고객 감사 이벤트 종료', date: '2025-07-20' },
];

const NoticeBoard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">공지사항</h2>
      
      <div className="divide-y divide-gray-200">
        {/* [2] map 함수로 데이터를 순회하며 리스트를 만듭니다. */}
        {noticesData.map((notice) => (
          <div key={notice.id} className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              {/* 카테고리 태그 */}
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                notice.category === '중요' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {notice.category}
              </span>
              {/* 제목 */}
              <p className="text-gray-700">{notice.title}</p>
            </div>
            {/* 날짜 */}
            <span className="text-sm text-gray-500">{notice.date}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
          더보기
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;