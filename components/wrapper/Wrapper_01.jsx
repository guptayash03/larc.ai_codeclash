import Header_01 from '@/components/header/Header_01';
import Footer_01 from '../footer/Footer_01';

// eslint-disable-next-line react/prop-types
const Wrapper_01 = ({ children }) => {
  return (
    <div className='page-wrapper relative z-[1] bg-white'>
      {/*...::: Header Start :::... */}
      <Header_01 />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      {children}
      {/*...::: Main End :::... */}

      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
};

export default Wrapper_01;
