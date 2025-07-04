'use client'

import Image from 'next/image'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <Image
      alt="Favicon"
      src={'/favicon.png'}
      width={50}
      height={50}
      style={{
        borderRadius: '100%'
      }}
    />
    // <svg
    //   fill="currentColor"
    //   viewBox="0 0 256 256"
    //   role="img"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={cn('h-4 w-4', className)}
    //   {...props}
    // >
    //   <circle cx="128" cy="128" r="128" fill="black"></circle>
    //   <circle cx="102" cy="128" r="18" fill="white"></circle>
    //   <circle cx="154" cy="128" r="18" fill="white"></circle>
    // </svg>
  )
}

export { IconLogo }
