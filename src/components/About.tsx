import { sarpanch } from '@/utils/fonts'
import Image from 'next/image'
import aboutImage from '@/assets/images/about.png'

const About = () => {
  return (
    <section className="about py-5 px-3">
      <div className="container d-flex flex-column row-gap-5">
        <h2 className={["title text-uppercase", sarpanch.className].join(' ')}>
          <span>Learn More</span> About Us
        </h2>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center column-gap-5 row-gap-5">
          <figure className="w-100 w-lg-50">
            <Image
              src={aboutImage}
              alt="About"
              loading='lazy'
            />
          </figure>

          <div className="w-100 w-lg-50 d-flex flex-column row-gap-4">
            <h1 className={['sub-title text-uppercase', sarpanch.className].join(' ')}>
              Company History
            </h1>

            <p className='lead'>
              <strong>Fit Trus</strong> is a leading chain of fitness centers dedicated to promoting health, wellness, and active lifestyles. Founded in 2005. We has grown from a single location to a nationwide network of state-of-the-art facilities.
            </p>

            <p className='lead'>
              <strong>Fit Trus</strong> continues to thrive as a leader in the fitness industry, with a growing network of franchise locations nationwide. The company remains committed to its founding principles of promoting health, wellness, and community, empowering individuals to live their best lives through regular physical activity and positive lifestyle choices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About