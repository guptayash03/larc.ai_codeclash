'use client'
import '@/styles/home-styles.css'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import useAccordion from '@/components/hooks/useAccordion';
import Footer_01 from '@/components/footer/Footer_01'
import Header_01 from '@/components/header/Header_01'
import useTabs from '@/components/hooks/useTabs'

function Home() {
  // const [activeIndex, handleAccordion] = useAccordion(0);

  const [activeTab, handleTab] = useTabs()

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {/*...::: Header Start :::... */}
      <Header_01 />
      {/*...::: Header End :::... */}
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section id="section-hero">
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]">
            <div className="global-container">
              <div className="mb-14 flex flex-col items-center text-center lg:mb-20">
                <h1 className="jos slide-from-bottom md:text-8xl sm:text-6xl mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]">
                  One Interface To 1000+ AI Models & Agents
                </h1>
                <p className="jos slide-from-bottom mb-11 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]">
                  Larc.Ai integrates all the LLMs, Image & Video Generating Ai
                  Models in one simplified interface & provides the best result
                  among all the models using our Model Router.
                </p>
                <div
                  className="jos flex flex-wrap justify-center gap-6"
                  data-jos_animation="fade"
                >
                  <Link
                    href="/"
                    className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                    prefetch={true}
                    // Replace with this onClick handler
                    onClick={e => {
                      e.preventDefault()
                      // Use a full page reload to clear any CSS conflicts
                      window.location.href = '/'
                    }}
                  >
                    Chat For Free
                  </Link>
                  {/* <Link
                    href='#'
                    className='button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                  >
                    Learn more
                  </Link> */}
                </div>
              </div>
              <div
                className="jos hero-img overflow-hidden rounded-2xl bg-black"
                data-jos_animation="zoom"
              >
                <Link href="/">
                  <Image
                    src="/assets/img_placeholder/th-1/hero-dashboard.png"
                    alt="hero-dashboard"
                    width="1296"
                    height="640"
                    className="h-auto w-full"
                  />
                </Link>
              </div>

              <div className="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20"></div>
              <div className="jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16">
                <p className="text-4xl font-semibold">Backed By</p>
              </div>
              <div className="jos brand-slider" data-jos_animation="fade">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={105}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                    768: {
                      slidesPerView: 2
                    },
                    992: {
                      slidesPerView: 3
                    },
                    1200: {
                      slidesPerView: 3
                    }
                  }}
                >
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/brand-1.png"
                      alt="brand-1"
                      width="344"
                      height="70"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/brand-2.png"
                      alt="brand-2"
                      width="344"
                      height="70"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/brand-3.png"
                      alt="brand-3"
                      width="344"
                      height="70"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/brand-4.png"
                      alt="brand-4"
                      width="275"
                      height="55"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  {/*<SwiperSlide>
                    <Image
                      src='/assets/img_placeholder/th-1/brand-5.png'
                      alt='brand-5'
                      width='168'
                      height='36'
                      className='max-w-full'
                    />
                  </SwiperSlide> */}
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/brand-1.png"
                      alt="brand-1"
                      width="344"
                      height="70"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/brand-2.png"
                      alt="brand-2"
                      width="344"
                      height="70"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/brand-3.png"
                      alt="brand-3"
                      width="344"
                      height="70"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <Image
                      src='/assets/img_placeholder/th-1/brand-4.png'
                      alt='brand-4'
                      width='175'
                      height='30'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img_placeholder/th-1/brand-5.png'
                      alt='brand-5'
                      width='168'
                      height='36'
                      className='max-w-full'
                    />
                  </SwiperSlide> */}
                </Swiper>
              </div>

              <div className="my-10 h-[1px] w-full lg:my-16 xl:my-20"></div>
              <div className="jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16">
                <p className="text-4xl font-semibold">Incubated At</p>
              </div>
              <div className="jos brand-slider" data-jos_animation="fade">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={105}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                    576: {
                      slidesPerView: 1
                    },
                    768: {
                      slidesPerView: 2
                    },
                    992: {
                      slidesPerView: 2
                    },
                    1200: {
                      slidesPerView: 2
                    }
                  }}
                >
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/incubator.png"
                      alt="brand-1"
                      width="160"
                      height="40"
                      className="max-w-full rounded-full border-2 border-black"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/NSUT.png"
                      alt="brand-2"
                      width="160"
                      height="40"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <Image
                      src='/assets/img_placeholder/th-1/brand-3.png'
                      alt='brand-3'
                      width='344'
                      height='70'
                      className='max-w-full'
                    />
                  </SwiperSlide> */}
                  {/* <SwiperSlide>
                    <Image
                      src='/assets/img_placeholder/th-1/brand-4.png'
                      alt='brand-4'
                      width='175'
                      height='30'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img_placeholder/th-1/brand-5.png'
                      alt='brand-5'
                      width='168'
                      height='36'
                      className='max-w-full'
                    />
                  </SwiperSlide> */}
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/incubator.png"
                      alt="brand-1"
                      width="160"
                      height="40"
                      className="max-w-full rounded-full border-2 border-black"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <Image
                      src="/assets/img_placeholder/th-1/NSUT.png"
                      alt="brand-2"
                      width="160"
                      height="40"
                      className="max-w-full"
                    />
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <Image
                      src='/assets/img_placeholder/th-1/brand-3.png'
                      alt='brand-3'
                      width='344'
                      height='70'
                      className='max-w-full'
                    />
                  </SwiperSlide> */}
                  {/* <SwiperSlide>
                    <Image
                      src='/assets/img_placeholder/th-1/brand-4.png'
                      alt='brand-4'
                      width='175'
                      height='30'
                      className='max-w-full'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src='/assets/img_placeholder/th-1/brand-5.png'
                      alt='brand-5'
                      width='168'
                      height='36'
                      className='max-w-full'
                    />
                  </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
            <div className="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]"></div>

            <div className="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]"></div>
          </div>
        </section>
        {/*...::: Hero Section End :::... */}

        {/*...::: Service Section Start :::... */}
        <section id="section-service">
          {/* Section Spacer */}
          <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 lg:mb-16 xl:mb-20">
                <div className="md:max-w-sm lg:max-w-xl xl:max-w-[746px]">
                  <h2>Core features that make it valuable</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Service List */}
              <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-1.svg"
                      alt=""
                      width="70"
                      height="70"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-1.svg"
                      alt="service-icon-orange-1"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link href="#" className="hover:text-colorOrangyRed">
                      LLM Router
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Our Recommendation Model selects the best Ai model according
                    to the User problem statement & also provide the response
                    from that model instantly
                  </p>

                  <Link
                    href="#"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-2.svg"
                      alt="service-icon-black-2"
                      width="70"
                      height="70"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-2.svg"
                      alt="service-icon-orange-1"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link href="#" className="hover:text-colorOrangyRed">
                      Convenient & Powerful
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    A Consistent, User-friendly interface eliminates the need to
                    switch between different apps or websites.
                  </p>

                  <Link
                    href="#"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                  {/* Features Item */}
                  {/* Features Item */}
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-3.svg"
                      alt="service-icon-black-3"
                      width="70"
                      height="70"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-3.svg"
                      alt="service-icon-orange-3"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link href="#" className="hover:text-colorOrangyRed">
                      Cost-Effective
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Instead of purchasing each Ai Model separately, User can
                    Subscribe to only one unified platform.
                  </p>

                  <Link
                    href="#"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-4.svg"
                      alt="service-icon-black-4"
                      width="70"
                      height="70"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-4.svg"
                      alt="service-icon-orange-4"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link href="#" className="hover:text-colorOrangyRed">
                      Time Saver
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Instead of learning and switching between multiple
                    platforms, User can use all the Ai models at one place.
                  </p>

                  <Link
                    href="#"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
              </ul>
              {/* Service List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Service Section End :::... */}

        {/* ...::: Content Section Start_1 :::... */}
        {/*...::: Content Section End_1 :::... */}

        {/*...::: Content Section Start_2 :::... */}
        {/*...::: Content Section End :::... */}

        {/*...::: Pricing Section Start :::... */}
        <section className="pricing-section">
          {/* Section Spacer */}
          <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 text-center lg:mb-12">
                <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
                  <h2>Cost-effective Pricing</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Pricing Block */}
              <div className="container mx-auto">
                {/* Tab buttons */}
                <div
                  className="jos flex justify-center"
                  data-jos_animation="fade"
                >
                  <div className="inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold">
                    <button
                      className={`tab-button price-button ${
                        activeTab === 0 ? 'active' : ''
                      }`}
                      onClick={() => handleTab(0)}
                      data-tab="monthly"
                    >
                      Monthly
                    </button>
                    <button
                      className={`tab-button price-button ${
                        activeTab === 1 ? 'active' : ''
                      }`}
                      onClick={() => handleTab(1)}
                      data-tab="annually"
                    >
                      Annually
                    </button>
                  </div>
                </div>

                {/* Pricing Block */}
                <div className="mt-12 lg:mt-16 xl:mt-20">
                  {/* Price List */}
                  {activeTab === 0 && (
                    <ul
                      id="monthly"
                      className="tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3"
                    >
                      {/* Price Item */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                        data-jos_animation="flip"
                        data-jos_delay="0"
                      >
                        <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Free
                        </h3>
                        <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Up to 1 User
                        </span>

                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                        <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                          ₹0
                          <span className="text-lg font-semibold">
                            /Per month
                          </span>
                        </h4>
                        <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          This is an excellent option for Individuals & Small
                          Creators who are starting out.
                        </p>
                        <Link
                          href="#"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Choose the plan
                        </Link>
                      </li>
                      {/* Price Item */}
                      {/* Price Item */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                        data-jos_animation="flip"
                        data-jos_delay="0"
                      >
                        <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Starter
                        </h3>
                        <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Up to 1 Users
                        </span>

                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                        <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                          ₹499
                          <span className="text-lg font-semibold">
                            /Per month
                          </span>
                        </h4>
                        <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          This plan is suitable for Experienced Creators as well
                          as small teams.
                        </p>
                        <Link
                          href="#"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Choose the plan
                        </Link>
                      </li>
                      {/* Price Item */}
                      {/* Price Item */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                        data-jos_animation="flip"
                        data-jos_delay="0"
                      >
                        <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Pro
                        </h3>
                        <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Up to 3 Users
                        </span>

                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                        <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                          ₹999
                          <span className="text-lg font-semibold">
                            /Per month
                          </span>
                        </h4>
                        <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Ideal for Professional Teams handling enterprise-level
                          projects, and websites.
                        </p>
                        <Link
                          href="#"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Choose the plan
                        </Link>
                      </li>
                      {/* Price Item */}
                    </ul>
                  )}
                  {/* Price List */}
                  {/* Price List */}
                  {activeTab === 1 && (
                    <ul
                      id="annually"
                      className="tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3"
                    >
                      {/* Price Item */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                        data-jos_animation="flip"
                        data-jos_delay="0"
                      >
                        <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Free
                        </h3>
                        <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Up to 1 members
                        </span>

                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                        <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                          ₹0
                          <span className="text-lg font-semibold">
                            /Per year
                          </span>
                        </h4>
                        <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          This is an excellent option for people & small
                          businesses who are starting out.
                        </p>
                        <Link
                          href="#"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Choose the plan
                        </Link>
                      </li>
                      {/* Price Item */}
                      {/* Price Item */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                        data-jos_animation="flip"
                        data-jos_delay="0"
                      >
                        <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Starter
                        </h3>
                        <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Up to 50 members
                        </span>

                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                        <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                          ₹4999
                          <span className="text-lg font-semibold">
                            /Per year
                          </span>
                        </h4>
                        <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          This plan is suitable for e-commerce stores as well as
                          professional blogs.
                        </p>
                        <Link
                          href="#"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Choose the plan
                        </Link>
                      </li>
                      {/* Price Item */}
                      {/* Price Item */}
                      <li
                        className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                        data-jos_animation="flip"
                        data-jos_delay="0"
                      >
                        <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Pro
                        </h3>
                        <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Up to 3 members
                        </span>

                        <div className="my-5 h-[1px] w-full bg-[#DBD6CF]"></div>
                        <h4 className="mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
                          ₹9999
                          <span className="text-lg font-semibold leading-none">
                            /Per year
                          </span>
                        </h4>
                        <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                          Ideal for handling complicated projects
                          enterprise-level projects, and websites.
                        </p>
                        <Link
                          href="#"
                          className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
                        >
                          Choose the plan
                        </Link>
                      </li>
                      {/* Price Item */}
                    </ul>
                  )}
                  {/* Price List */}
                </div>
                {/* Pricing Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Pricing Section End :::... */}

        {/*...::: Team Section Start :::... */}
        <section id="team-section">
          {/* Section Spacer */}
          <div className="pb-40 xl:pb-[220px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
                  <h2>Our team</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Team Member List */}
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Team Member Item */}
                <li
                  className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]  "
                  data-jos_animation="flip"
                  data-jos_delay="0.1"
                >
                  <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                    <Image
                      src="/assets/img_placeholder/th-1/team-member-img-1.png"
                      alt="team-member-img-1"
                      width={376}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-5">
                    <Link
                      href="#"
                      className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                    >
                      Yash Gupta - CEO
                    </Link>
                    <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                      <span className="text-[21px]">B.Tech (NSUT)</span>
                      <ul className="mt-auto flex gap-x-[15px]">
                        <li>
                          <Link
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/guptayash03"
                            className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                          >
                            <Image
                              src="/assets/img_placeholder/th-1/linkedin-icon-white.svg"
                              alt="linkedin"
                              width={14}
                              height={14}
                              className="opacity-100 group-hover:opacity-0"
                            />
                            <Image
                              src="/assets/img_placeholder/th-1/linkedin-icon-black.svg"
                              alt="linkedin"
                              width={14}
                              height={14}
                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/"
                            className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                          >
                            <Image
                              src="/assets/img_placeholder/th-1/instagram-icon-white.svg"
                              alt="instagram"
                              width={14}
                              height={14}
                              className="opacity-100 group-hover:opacity-0"
                            />
                            <Image
                              src="/assets/img_placeholder/th-1/instagram-icon-black.svg"
                              alt="instagram"
                              width={14}
                              height={14}
                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Team Member Item */}
                {/* Team Member Item */}
                <li
                  className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]"
                  data-jos_animation="flip"
                  data-jos_delay="0.2"
                >
                  <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                    <Image
                      src="/assets/img_placeholder/th-1/team-member-img-2.jpeg"
                      alt="team-member-img-2"
                      width={376}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-5">
                    <Link
                      href="#"
                      className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                    >
                      Nihal Sharma - CTO
                    </Link>
                    <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                      <span className="text-[21px]">B.Tech (NSUT)</span>
                      <ul className="mt-auto flex gap-x-[15px]">
                        <li>
                          <Link
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/itsnihalsharma/"
                            className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                          >
                            <Image
                              src="/assets/img_placeholder/th-1/linkedin-icon-white.svg"
                              alt="linkedin"
                              width={14}
                              height={14}
                              className="opacity-100 group-hover:opacity-0"
                            />
                            <Image
                              src="/assets/img_placeholder/th-1/linkedin-icon-black.svg"
                              alt="linkedin"
                              width={14}
                              height={14}
                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/nihalsharma06/"
                            className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                          >
                            <Image
                              src="/assets/img_placeholder/th-1/instagram-icon-white.svg"
                              alt="instagram"
                              width={14}
                              height={14}
                              className="opacity-100 group-hover:opacity-0"
                            />
                            <Image
                              src="/assets/img_placeholder/th-1/instagram-icon-black.svg"
                              alt="instagram"
                              width={14}
                              height={14}
                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Team Member Item */}
              </ul>
              {/* Team Member List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Team Section End :::... */}

        {/*...::: Funfact Section Start :::... */}
        {/*...::: Funfact Section End :::... */}

        {/*...::: FAQ Section Start :::... */}
        {/*...::: FAQ Section End :::... */}

        {/*...::: Testimonial Section Start :::... */}
        {/*...::: Testimonial Section Start :::... */}

        {/* Body Background Shape 1 */}
        <div className="orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>
        <div className="orange-gradient-1 absolute -left-[15px] top-[41%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>
        <div className="orange-gradient-2 absolute -right-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
        {/* Body Background Shape 2 */}
        <div className="orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
      </main>
      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  )
}

export default Home
