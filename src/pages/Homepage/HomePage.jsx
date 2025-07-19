import { Link } from 'react-router-dom';
import '@/assets/css/home.css' 
import TechCardsSection  from './components/TechCardsSection'
import ProductInfoSection  from './components/ProductInfoSection'



function HomePage() {
  return (
    // React에서는 여러 요소를 반환할 때 빈 태그 <>...</>로 감싸줘야 합니다.
    <>
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-gmarket font-bold mb-6">정밀함의 기준, 비철금속의 미래를 선도합니다</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">최고 품질의 황동봉, 동, 신주 등 비철금속 원자재를 안정적으로 공급하는 전문 기업</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* 페이지 이동은 Link 컴포넌트로! */}
            <Link to="/contact" className="bg-[#B87333] hover:bg-[#A05C2A] text-white font-bold py-3 px-8 rounded-md transition duration-300">견적 문의</Link>
            <Link to="/products" className="bg-transparent hover:bg-white hover:text-[#0A2342] text-white font-bold py-3 px-8 border-2 border-white rounded-md transition duration-300">제품 소개</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-gmarket font-bold text-[#0A2342] mb-4">회사 소개</h2>
            <div className="w-20 h-1 bg-[#B87333] mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl font-gmarket font-bold text-[#0A2342] mb-4">기업 비전</h3>
              <p className="text-gray-700 mb-6">최첨단 기술과 품질 관리 시스템을 바탕으로 국내 최고의 비철금속 전문 기업으로 성장하며, 고객과의 신뢰를 최우선 가치로 삼습니다.</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1"><svg className="h-5 w-5 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></div>
                  <p className="ml-3 text-gray-700">2005년 설립 이후 꾸준한 성장</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1"><svg className="h-5 w-5 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></div>
                  <p className="ml-3 text-gray-700">연간 5,000톤 이상의 비철금속 공급</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1"><svg className="h-5 w-5 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></div>
                  <p className="ml-3 text-gray-700">ISO 9001 품질 경영 시스템 인증</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="https://plus.unsplash.com/premium_photo-1661963247622-be10e1ea2c25?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="공장 내부" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      <TechCardsSection/>
      <ProductInfoSection/>
    

      
    </>
  );
}

export default HomePage;