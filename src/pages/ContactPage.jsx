import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productInterest: '',
    quantity: '',
    message: '',
  });

  const handleChange = () => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    e.preventDefault();
    alert('문의가 접수되었습니다. (개발자 콘솔을 확인해보세요)');
    console.log('최종 제출 데이터:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">문의하기</h2>
          <div className="w-20 h-1 bg-[#B87333] mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">제품에 대한 문의나 견적 요청을 보내주시면 신속하게 답변 드리겠습니다.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">회사명</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contactName" className="block text-gray-700 font-medium mb-2">담당자명</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">전화번호</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="productInterest" className="block text-gray-700 font-medium mb-2">관심 제품</label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]"
                >
                  <option value="">제품을 선택하세요</option>
                  <option value="brass">황동봉</option>
                  <option value="copper">동 제품</option>
                  <option value="aluminum">신주</option>
                  <option value="other">기타</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">문의 내용</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0A2342] hover:bg-[#1A3B6E] text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                문의 보내기
              </button>
            </form>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold text-[#0A2342] mb-6">연락처 정보</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0A2342] p-3 rounded-full mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">전화 문의</h4>
                    <p className="text-gray-600">02-1234-5678</p>
                    <p className="text-gray-600">평일 09:00 ~ 18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0A2342] p-3 rounded-full mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">이메일 문의</h4>
                    <p className="text-gray-600">contact@metatech.co.kr</p>
                    <p className="text-gray-600">24시간 접수 가능</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#0A2342] p-3 rounded-full mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">오시는 길</h4>
                    <p className="text-gray-600">경기도 화성시 봉담읍 동화리 283</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.0378468553004!2d126.9605167765054!3d37.22307647212964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b41fa5b6b14b5%3A0x419f0702f1b7c7e4!2z7Jqw66a86riI7IaN7IKs!5e0!3m2!1sko!2skr!4v1752840276514!5m2!1sko!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
