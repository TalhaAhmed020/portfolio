import Image from 'next/image'
import Link from 'next/link'
import image1 from '/public/1.PNG'
import image2 from '/public/2.PNG'
import image3 from '/public/3.PNG'
import image4 from '/public/4.PNG'
import image5 from '/public/5.PNG'
import image6 from '/public/6.PNG'
import image7 from '/public/7.PNG'

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
          src={image2}
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>

          <Link href='https://www.hextechdevelopers.com/' target='_block'>
          <Image
          src={image3}
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
          src={image4}
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>

          <Link href='https://acm-6i1p.vercel.app/' target='_block'>
          <Image
          src={image5}
          className="transition-transform transform hover:scale-110 rounded-md"
          alt='Loading Error'
          width={400}
          height={400}
          />
          </Link>

          <Link href='https://tiny-squirrel-88bdc9.netlify.app/' target='_block'>
          <Image
          src={image6}
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
          src={image7}
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
