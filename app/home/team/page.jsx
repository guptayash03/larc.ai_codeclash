import Footer_01 from '@/components/footer/Footer_01'
import Header_01 from '@/components/header/Header_01'
import Image from 'next/image'
import Link from 'next/link'

function Team() {
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
                <h1 className="breadcrumb-title">Our Team</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/home">Home</Link>
                  </li>
                  <li>Our Team</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}
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
                      href="/team-details"
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
                            href="https://www.instagram.com/yash.gupta_03/"
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
                      href="/team-details"
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
      </main>
      <Footer_01 />
    </div>
  )
}

export default Team
