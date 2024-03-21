import { sarpanch } from "@/utils/fonts"
import ServicesCard from "@/components/ServicesCard"

type Props = {
  className?: string
}

const Services = ({ className = '' }: Props) => {
  return (
    <section className={["services p-5 px-3", className, sarpanch.className].join(' ')}>
      <div className="container d-flex flex-column row-gap-4">
        <h2 className="title text-uppercase">
          <span>Weekly</span> Plans
        </h2>

        <div className="row mt-4 row-gap-4">
          <div className="col col-12 col-md-6 col-lg-4">
            <ServicesCard 
              className="me-md-2 me-lg-0"
              title="One Time"
              price="$40"
              services={[
                "Training Consultation", 
                "Training Guidance", 
                "Body Composition Analysis", 
                "Workout Sessions"
              ]}
            />
          </div>

          <div className="col col-12 col-md-6 col-lg-4">
            <ServicesCard 
              className="ms-md-2 mx-lg-0 text-white highlight"
              linkClassName="text-white"
              title="Two Times"
              price="$70"
              services={[
                "8-12 Training Consultations", 
                "Training Guidance", 
                "1 Body Composition Analysis", 
                "Workout Sessions"
              ]}
            />
          </div>

          <div className="col col-12 col-md-6 col-lg-4">
            <ServicesCard 
              className="me-md-2 ms-lg-0"
              title="Three Times"
              price="$110"
              services={[
                "8 Training Consultations", 
                "Training Guidance", 
                "1 Body Composition Analysis", 
                "Workout Sessions"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services