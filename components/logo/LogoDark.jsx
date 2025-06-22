import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/img_placeholder/logo-dark.png';

const LogoDark = () => {
  return (
    <Link href='/home'>
      <Image src={logo} alt='AIMass' width='120' height='30' />
    </Link>
  );
};

export default LogoDark;
