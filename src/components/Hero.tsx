import Image from 'next/image'
import heroImage from '@/assets/images/hero.png'
import { sarpanch } from "@/utils/fonts"
import LinkCTA from '@/components/LinkCTA'

const Hero = () => {
  return (
    <section className="hero py-5 px-3 text-white">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center column-gap-2 row-gap-5">
        <div className="w-100 w-lg-50 d-flex flex-column row-gap-4">
          <h1 className={['title', sarpanch.className].join(' ')}>
            <span>RENOVATE</span> YOUR BODY
          </h1>

          <p className='lead'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, reprehenderit.
          </p>

          <LinkCTA
            href='/services'
            className='fs-5 text-white text-uppercase mt-3'
            text='Start Today'
          />
        </div>

        <figure className="w-100 w-lg-50">
          <Image
            src={heroImage}
            alt="Hero"
            loading='lazy'
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero