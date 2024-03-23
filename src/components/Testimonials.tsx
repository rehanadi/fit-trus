import { sarpanch } from "@/utils/fonts"
import testimonial1 from '@/assets/images/testimonial-1.jpg'
import testimonial2 from '@/assets/images/testimonial-2.jpg'
import testimonial3 from '@/assets/images/testimonial-3.jpg'
import TestimonialsCard from "@/components/TestimonialsCard"

type Props = {
  className?: string
}

const Testimonials = ({ className = '' }: Props) => {
  return (
    <section className={["testimonials py-5 px-3", className].join(" ")}>
      <div className="container d-flex flex-column row-gap-4">
        <h2 className={["title text-uppercase", sarpanch.className].join(' ')}>
          <span>What People Say</span> About Us
        </h2>

        <div className="row mt-4 row-gap-4">
          <div className="col col-12 col-md-6 col-lg-4">
            <TestimonialsCard 
              name="Will Higgens"
              image={testimonial1}
              review="I joined Fit Trus a year ago, and it's been a life-changing experience. Before joining, I struggled to find the motivation and support I needed to prioritize my health and fitness. But from the moment I walked through the doors of FIt Trus, I knew I had found something special"
              className="me-md-2"
            />
          </div>

          <div className="col col-12 col-md-6 col-lg-4">
            <TestimonialsCard 
              name="Sarah Smith"
              image={testimonial2}
              review="Since joining Fit Trus, I've seen incredible progress in my fitness journey. I've lost weight, gained strength, and improved my overall well-being. But more than that, I've gained confidence, self-discipline, and a newfound love for taking care of my body."
              className="ms-md-2 mx-lg-2"
            />
          </div>

          <div className="col col-12 col-md-6 col-lg-4">
            <TestimonialsCard 
              name="Julie George"
              image={testimonial3}
              review="Fit Trus isn't just a gym—it's a supportive community that empowers you to be the best version of yourself. I'm so grateful to have found Fit Trus, and I can't wait to see where my fitness journey takes me next."
              className="me-md-2 ms-lg-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials