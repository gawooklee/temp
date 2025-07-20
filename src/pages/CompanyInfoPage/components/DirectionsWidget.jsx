import React, { useState } from 'react';

const DirectionsWidget = () => {
  const [activeTab, setActiveTab] = useState('subway');

  const transportationOptions = {
    subway: {
      title: "지하철",
      description: "3호선 고속터미널역 1번 출구에서 도보 5분",
      details: "고속터미널역에서 내린 후, 1번 출구로 나가서 직진하시면 됩니다. 약 400미터 거리입니다."
    },
    bus: {
      title: "버스",
      description: "405번, 462번 버스 이용",
      details: "고속터미널 정류장에서 하차 후, 도보 3분. 버스 정류장에서 건물을 보실 수 있습니다."
    },
    car: {
      title: "자동차",
      description: "주차장 이용 가능",
      details: "내비게이션에 '서울특별시 서초구 신반포로 176'을 입력해주세요. 건물 앞에 주차장이 있습니다."
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md">
   
      <div className="aspect-video w-full h-100 mb-6 overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.0378468553004!2d126.9605167765054!3d37.22307647212964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b41fa5b6b14b5%3A0x419f0702f1b7c7e4!2z7Jqw66a86riI7IaN7IKs!5e0!3m2!1sko!2skr!4v1752840276514!5m2!1sko!2skr"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="space-y-4">
        <div className="flex border-b border-gray-200">
          {Object.keys(transportationOptions).map((option) => (
            <button
              key={option}
              className={`py-2 px-4 text-sm font-medium focus:outline-none ${
                activeTab === option
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(option)}
            >
              {transportationOptions[option].title}
            </button>
          ))}
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {transportationOptions[activeTab].title}
          </h3>
          <p className="text-gray-600 mb-2">
            {transportationOptions[activeTab].description}
          </p>
          <p className="text-gray-500 text-sm">
            {transportationOptions[activeTab].details}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-1">주소</h4>
        <p className="text-gray-600">경기도 안양시 만안구 박달동 681 (오리로 16)</p>
      </div>
    </div>
  );
};

export default DirectionsWidget;
