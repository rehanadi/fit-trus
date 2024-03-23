import { notFound } from 'next/navigation'
import services from '@/data/services.json'
import { sarpanch, openSans } from '@/utils/fonts'
import { FaCheck } from 'react-icons/fa'
import LinkCTA from '@/components/LinkCTA'

type Props = { 
  params: { 
    slug: string 
  } 
}

const ServicePage = ({ params: { slug } }: Props) => {
  const service = services.find(service => service.slug === slug)

  if (!service) return notFound()

  return (
    <section className={["services p-5 px-3", sarpanch.className].join(' ')}>
      <div className="container d-flex flex-column row-gap-4">
        <h2 className="title text-uppercase">
          {service.name} <span className="d-block">{service.price}</span>
        </h2>

        <ul className="d-flex flex-column row-gap-2">
          {service.services.map((item, index) => (
            <li className="d-flex align-items-center column-gap-3" key={index}>
              <FaCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className={["lead", openSans.className].join(" ")}>
          {service.description}
        </p>

        <LinkCTA
          href="/services"
          className="fs-5 mt-2"
          text='Start Today'
        />
      </div>
    </section>
  )
}

export default ServicePage