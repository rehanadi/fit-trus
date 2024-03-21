import { FaCheck } from "react-icons/fa"
import LinkCTA from "./LinkCTA"

type Props = {
  className?: string;
  linkClassName?: string;
  title: string;
  price: string;
  services: string[];
}

const ServicesCard = ({ className = "", linkClassName = "", title, price, services = [] }: Props) => {
  return (
    <div className={["services-card card border-secondary-subtle rounded-0 py-5 px-4 px-sm-5 px-md-4 d-flex flex-column row-gap-3", className].join(" ")}>
      <h4 className="sub-title position-relative pb-3">
        {title} <span className="d-block">{price}</span>
      </h4>

      <ul className="d-flex flex-column row-gap-2">
        {services.map((service, index) => (
          <li className="d-flex align-items-center column-gap-3" key={index}>
            <FaCheck />
            <span>{service}</span>
          </li>
        ))}
      </ul>

      <LinkCTA
        href='/services'
        className={["fs-5 mt-2", linkClassName].join(" ")}
        text='Start Today'
      />
    </div>
  )
}

export default ServicesCard