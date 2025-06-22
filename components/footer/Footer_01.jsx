import Image from 'next/image';


const Footer_01 = () => {
  return (
    <footer className='relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
      {/* Footer Top */}
      <div className='py-[60px] xl:pb-[100px] xl:pt-[130px]'>
        <div className='overflow-hidden'>
          {/* Footer Text Slider */}
          <div className='footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap'>
            {/* Footer Slide Item  */}
            <Image
              src='/assets/img_placeholder/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              OpenAI
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Image
              src='/assets/img_placeholder/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Gemini
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Image
              src='/assets/img_placeholder/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Claude
            </div>
            {/* Footer Slide Item  */}
              {/* Footer Slide Item  */}
              <Image
              src='/assets/img_placeholder/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              DeepSeek
            </div>
            {/* Footer Slide Item  */}
                          {/* Footer Slide Item  */}
                          <Image
              src='/assets/img_placeholder/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Perplexity
            </div>
            {/* Footer Slide Item  */}
          </div>
        </div>
      </div>
      {/* Footer Text Slider */}
      {/* Footer Top */}
      <div className='global-container'>
        {/* Footer Bottom */}
        <div className='py-9 text-center'>
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            DeepEngine Ai Pvt Ltd.
          </p>
        </div>
        {/* Footer Bottom */}
      </div>
      {/* Footer Background Shape 1  */}
      <div className='orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]'></div>
      {/* Footer Background Shape 2  */}
      <div className='orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]'></div>
    </footer>
  );
};

export default Footer_01;
