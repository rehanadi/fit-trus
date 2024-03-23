import { sarpanch } from "@/utils/fonts"
import ServicesCard from "@/components/ServicesCard"
import services from '@/data/services.json'

type Props = {
  className?: string
}

const cardClassNames = [
  "me-md-2 me-lg-0",
  "ms-md-2 mx-lg-0 text-white highlight",
  "me-md-2 ms-lg-0"
]

const linkClassNames = [
  "",
  "text-white",
  ""
]

const Services = ({ className = '' }: Props) => {
  return (
    <section className={["services p-5 px-3", className, sarpanch.className].join(' ')}>
      <div className="container d-flex flex-column row-gap-4">
        <h2 className="title text-uppercase">
          <span>Weekly</span> Plans
        </h2>

        <div className="row mt-4 row-gap-4">
          {services?.map((service: any, index: number) => (
            <div className="col col-12 col-md-6 col-lg-4" key={index}>
              <ServicesCard 
                className={cardClassNames[index]}
                linkClassName={linkClassNames[index]}
                name={service.name}
                slug={service.slug}
                price={service.price}
                services={service.services}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services