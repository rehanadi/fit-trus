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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eveniet illo beatae necessitatibus natus soluta quaerat culpa at laboriosam, quibusdam error omnis ea quasi blanditiis dignissimos laudantium magni. Nemo, expedita?
            </p>

            <p className='lead'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eveniet illo beatae necessitatibus natus soluta quaerat culpa at laboriosam, quibusdam error omnis ea quasi blanditiis dignissimos laudantium magni. Nemo, expedita?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About