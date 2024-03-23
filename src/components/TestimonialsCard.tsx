import { sarpanch } from "@/utils/fonts"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"
import { FaStar } from "react-icons/fa"

type Props = {
  name: string;
  image: string | StaticImport;
  review: string;
  className?: string;
}

const TestimonialsCard = ({ name, image, review, className = "" }: Props) => {
  return (
    <div className={["testimonials-card card border-secondary-subtle rounded-3 py-5 px-4 px-sm-5 px-md-4 d-flex flex-column row-gap-4", className].join(" ")}>
      <div className="d-flex flex-column flex-sm-row justify-content-start align-items-center gap-4">
        <figure className="rounded-circle">
          <Image
            className="rounded-circle"
            src={image}
            alt="Testimonial"
            loading='lazy'
          />
        </figure>

        <div className="d-flex align-items-center align-items-sm-start flex-column gap-2">
          <h5 className={["name", sarpanch.className].join(" ")}>{name}</h5>
          <div className="rating d-flex gap-1 flex-shrink-0">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>

      <p>{review}</p>
    </div>
  )
}

export default TestimonialsCard