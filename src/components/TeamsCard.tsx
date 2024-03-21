import { sarpanch } from "@/utils/fonts"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

type Props = {
  name: string;
  image: string | StaticImport;
  title: string;
  phone: string;
  className?: string;
}

const TeamsCard = ({ name, image, title, phone, className = "" }: Props) => {
  return (
    <div className={["teams-card card border-secondary-subtle rounded-3 py-5 px-4 px-sm-5 px-md-4 d-flex flex-column align-items-center row-gap-3", className].join(" ")}>
      <figure className="rounded-circle">
        <Image
          className="rounded-circle"
          width={100}
          height={100}
          src={image}
          alt="Testimonial"
          loading='lazy'
        />
      </figure>

      <h4 className={["name mb-0", sarpanch.className].join(" ")}>{name}</h4>

      <h5 className={sarpanch.className}>{title}</h5>

      <p>{phone}</p>

      <div className="social d-flex gap-3 flex-shrink-0">
        <Link href="/">
          <FaFacebookF />
        </Link>

        <Link href="/">
          <FaInstagram />
        </Link>

        <Link href="/">
          <FaTwitter />
        </Link>
      </div>
    </div>
  )
}

export default TeamsCard