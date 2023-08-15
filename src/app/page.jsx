import Image from 'next/image'
import Link from 'next/link'
import image1 from '/public/1.PNG'

export default function Home() {
  return (
    <div className='py-20 px-10 flex flex-col'>
        <h1 className='text-2xl text-black '> <u>My Portfolio</u></h1>
        <div className='flex flex-col sm:flex-row gap-10 justify-center mt-10'>
          <Link href='https://weather-app-two-olive.vercel.app/' target='_block'>
          <Image
          src={image1}
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>

          <Link href='https://gpt3-theta-one.vercel.app/' target='_block'>
          <Image
          src='/2.png'
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>

          <Link href='https://www.hextechdevelopers.com/' target='_block'>
          <Image
          src='/3.png'
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>

        </div>

        <div className='flex flex-col sm:flex-row gap-10 justify-center mt-10'>
          <Link href='https://cylock.vercel.app/' target='_block'>
          <Image
          src='/4.png'
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>

          <Link href='https://acm-6i1p.vercel.app/' target='_block'>
          <Image
          src='/5.png'
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>

          <Link href='https://tiny-squirrel-88bdc9.netlify.app/' target='_block'>
          <Image
          src='/6.png'
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>
         
        </div>

        <div className='flex flex-col sm:flex-row gap-10 justify-center mt-10'>
          <Link href='https://cozy-shortbread-d79368.netlify.app/' target='_block'>
          <Image
          src='/7.png'
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>
         
         
        </div>
    </div>
  )
}
