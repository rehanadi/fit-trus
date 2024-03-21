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
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt autem minima iusto perferendis ullam facere provident molestias esse ex numquam, hic iure similique assumenda quibusdam ipsa. Pariatur, autem facilis!"
              className="me-md-2"
            />
          </div>

          <div className="col col-12 col-md-6 col-lg-4">
            <TestimonialsCard 
              name="Sarah Smith"
              image={testimonial2}
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt autem minima iusto perferendis ullam facere provident molestias esse ex numquam, hic iure similique assumenda quibusdam ipsa. Pariatur, autem facilis!"
              className="ms-md-2 mx-lg-2"
            />
          </div>

          <div className="col col-12 col-md-6 col-lg-4">
            <TestimonialsCard 
              name="Julie George"
              image={testimonial3}
              review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt autem minima iusto perferendis ullam facere provident molestias esse ex numquam, hic iure similique assumenda quibusdam ipsa. Pariatur, autem facilis!"
              className="me-md-2 ms-lg-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials