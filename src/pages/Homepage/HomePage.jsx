import { Link } from 'react-router-dom';
import '@/assets/css/home.css' 
import TechCardsSection  from './components/TechCardsSection'
import ProductInfoSection  from './components/ProductInfoSection'

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative flex items-center justify-center text-center w-full min-h-[85vh] bg-cover bg-center overflow-hidden">
        {/* 어두운 오버레이 추가: 텍스트 가독성을 높이고 고급스러운 분위기 연출 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/80 via-black/50 to-black/80"></div>
        
        <div className="container relative z-10 mx-auto px-6 py-24 flex flex-col items-center">
          {/* 브론즈 컬러 포인트 텍스트 */}
          <span className="text-[#B87333] font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base opacity-90">
            Premium Non-Ferrous Metals
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-gmarket font-extrabold text-white mb-6 leading-[1.2] drop-shadow-xl">
            정밀함의 기준, <br className="hidden md:block"/>비철금속의 미래를 선도합니다
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 font-light leading-relaxed">
            최고 품질의 황동봉, 동, 신주 등 원자재를 안정적으로 공급하는 <br className="hidden md:block"/>
            신뢰도 1위 파트너 <strong className="text-white font-semibold">우림금속</strong>입니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto mt-4">
            <Link to="/contact" className="group relative flex items-center justify-center bg-[#B87333] hover:bg-[#A05C2A] text-white font-bold py-4 px-10 rounded text-lg transition-all duration-300 shadow-[0_0_20px_rgba(184,115,51,0.3)] hover:shadow-[0_0_25px_rgba(184,115,51,0.6)] w-full sm:w-auto">
              견적 문의
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link to="/products" className="group flex items-center justify-center bg-transparent hover:bg-white text-white hover:text-[#0A2342] font-bold py-4 px-10 border-2 border-white/80 hover:border-white rounded text-lg transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
              제품 소개
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        {/* 우측 하단의 장식용 원형 패턴 */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0A2342]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* 텍스트 영역 */}
            <div className="lg:w-1/2 w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-[#B87333]"></div>
                <span className="text-[#B87333] font-bold tracking-widest uppercase text-sm">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-gmarket font-bold text-[#0A2342] mb-6 leading-tight">
                원칙과 신뢰로 다져온 <br/>
                <span className="text-[#B87333]">{new Date().getFullYear() - 2000}년의 장인정신</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light break-keep">
                최첨단 기술과 철저한 품질 관리 체계를 바탕으로 국내 최고의 비철금속 및 황동봉 전문 기업으로 성장했습니다. 당사는 고객과의 두터운 신뢰를 최우선 가치로 삼으며, 언제나 변함없는 하이엔드 품질의 원자재를 적시에 책임 공급합니다.
              </p>
              
              {/* 성과 지표 (Stats Grid) - 전문성을 보여주는 수치형 데이터 */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 my-10 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 blur-lg -z-10 rounded-2xl"></div>
                
                <div className="border-l-4 border-[#B87333] pl-5 flex flex-col justify-center">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black text-[#0A2342] tracking-tighter">2000</span>
                    <span className="text-base font-medium text-gray-400">년</span>
                  </div>
                  <p className="text-sm text-gray-500 font-semibold leading-tight">설립 이후 지속적인 성장</p>
                </div>
                
                <div className="border-l-4 border-[#B87333] pl-5 flex flex-col justify-center">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black text-[#0A2342] tracking-tighter">1,500</span>
                    <span className="text-3xl font-black text-[#B87333]">+</span>
                  </div>
                  <p className="text-sm text-gray-500 font-semibold leading-tight">연간 고품질 금속 공급량(톤)</p>
                </div>
              </div>
              
              <Link to="/about" className="inline-flex items-center text-[#0A2342] font-bold hover:text-[#B87333] transition-colors gap-2 mt-2 group">
                <span className="border-b-2 border-[#0A2342] group-hover:border-[#B87333] pb-1 transition-colors">자세히 보기</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>

            {/* 이미지 영역 */}
            <div className="lg:w-1/2 w-full relative mt-10 lg:mt-0">
              {/* 장식용 프레임 배경 */}
              <div className="absolute inset-0 bg-[#B87333] rounded-2xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="absolute inset-0 border border-[#0A2342]/10 rounded-2xl transform -translate-x-4 -translate-y-4"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100 group">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661963247622-be10e1ea2c25?q=80&w=1171&auto=format&fit=crop" 
                  alt="공장 내부" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* 플로팅 배지 - 신뢰감 부여 */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 md:p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] z-20 flex items-center gap-4 border-t-4 border-[#B87333]">
                <div className="bg-[#0A2342]/5 p-3 rounded-full">
                  <svg className="w-8 h-8 text-[#B87333]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <p className="text-[#0A2342] font-extrabold text-lg">최상의 품질 보증</p>
                  <p className="text-sm text-gray-500 mt-0.5 font-medium">엄격한 검수를 통과한 자재</p>
                </div>
              </div>
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