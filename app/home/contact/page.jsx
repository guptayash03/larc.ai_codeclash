import Footer_01 from '@/components/footer/Footer_01'
import Header_01 from '@/components/header/Header_01'
import Image from 'next/image'
import Link from 'next/link'

function Contact() {
  return (
    <div className="bg-white">
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Contact Us</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/home">Home</Link>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Contact Section Start :::... */}
        <section className="contact-section">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-[minmax(0,_1fr)_1.1fr]">
                {/* Contact Left Block */}
                <div className="order-2 flex flex-col md:order-1">
                  {/* Section Content Block */}
                  <div className="mb-8 text-left lg:mb-16 xl:mb-6">
                    <div className="mx-auto md:mx-0 md:max-w-none">
                      <h2>Get in touch with us directly</h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      We are here to help you! Tell us how we can help &amp; we
                      ll be in touch within the next 24 hours.
                    </p>
                    <ul className="mt-12 flex flex-col gap-y-8 lg:gap-y-12">
                      <li className="flex flex-col gap-y-4 text-2xl font-bold">
                        Send us an email:
                        <Link
                          href="contact@larc.ai"
                          className="text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl"
                        >
                          contact@larc.ai
                        </Link>
                        <Link
                          href="nihal.sharma@larc.ai"
                          className="text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl"
                        >
                          nihal.sharma@larc.ai
                        </Link>
                        <Link
                          href="contact@larc.ai"
                          className="text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl"
                        >
                          yash.gupta@larc.ai
                        </Link>
                      </li>
                      <li className="flex flex-col gap-y-4 text-2xl font-bold">
                        Give us a call:
                        <Link
                          href="tel:+918882115099"
                          className="text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl"
                        >
                          +(91) 88821 15099
                        </Link>
                        <Link
                          href="tel:+917053904411"
                          className="text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl"
                        >
                          +(91) 7053904411
                        </Link>
                      </li>
                      <li className="flex flex-col gap-y-4 text-2xl font-bold">
                        Follow us:
                        <ul className="mt-auto flex gap-x-[15px]">
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="#"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/facebook-icon-white.svg"
                                alt="facebook"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/facebook-icon-black.svg"
                                alt="facebook"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="#"
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                            >
                              <Image
                                src="/assets/img_placeholder/th-1/twitter-icon-white.svg"
                                alt="twitter"
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0"
                              />
                              <Image
                                src="/assets/img_placeholder/th-1/twitter-icon-black.svg"
                                alt="twitter"
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              rel="noopener noreferrer"
                              href="https://www.linkedin.com/company/the-larc-ai/"
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
                              href="#"
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
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Contact Left Block */}
                {/* Contact Right Block */}
                {/* Contact Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Contact Section End :::... */}
        {/*...::: Map Section Start :::... */}
        <section className="map-section">
          {/* Section Spacer */}
          <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[950px]">
                  <h2 className="text-white">
                    We always welcome our clients to our office
                  </h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Map Block */}
              <div className="relative">
                <Image
                  src="/assets/img_placeholder/th-1/mapbase.svg"
                  width={100}
                  height={100}
                  alt="mapbase"
                  className="h-auto w-full"
                />
                {/* Location 4 */}
                <div className="group absolute hidden sm:flex gap-2 sm:top-[5%]  sm:left-[61%]">
                  <div className="relative w-[50px] h-[50px]">
                    <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                      <Image
                        src="/assets/img_placeholder/th-1/icon-gray-location-marker.svg"
                        alt="icon-gray-location-marker"
                        width={35}
                        height={35}
                        className="opacity-100 group-hover:opacity-0 transition-all duration-300"
                      />
                      <Image
                        src="/assets/img_placeholder/th-1/icon-orange-location-marker.svg"
                        alt="icon-gray-location-marker"
                        width={50}
                        height={50}
                        className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                      />
                    </button>
                    <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                      <div className="flex gap-1 font-bold pb-3">
                        <Image
                          src="/assets/img_placeholder/th-1/icon-black-location-marker.svg"
                          alt="icon-black-location-marker"
                          width={17}
                          height={17}
                        />
                        Delhi, India
                      </div>
                      <address className="not-italic font-semibold">
                        2266/2, Mandir Lane, Shadipur, New Delhi - 110008
                      </address>
                    </div>
                  </div>
                </div>
                {/* Location 4 */}
              </div>
              {/* Map Block */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Map Section Start :::... */}
      </main>
      <Footer_01 />
    </div>
  )
}

export default Contact
