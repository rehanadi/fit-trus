import { openSans, sarpanch } from "@/utils/fonts"
import Link from "next/link"
import Logo from "@/components/Logo"
import LinkCTA from "@/components/LinkCTA"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={["footer py-5 px-3 text-white", sarpanch.className].join(" ")}>
      <div className="container d-flex flex-column row-gap-5">
        <div className="d-inline-flex">
          <Logo />
        </div>

        <div className="row row-gap-5">
          <div className="col col-12 col-md-6 col-lg-4">
            <h5 className="mb-4 d-inline-flex">Programs</h5>

            <ul className="d-flex flex-column gap-2">
              <li>
                <Link href="/">Crossfit</Link>
              </li>
              <li>
                <Link href="/">Cardio</Link>
              </li>
              <li>
                <Link href="/">Pilates</Link>
              </li>
              <li>
                <Link href="/">Personal</Link>
              </li>
            </ul>
          </div>
          
          <div className="col col-12 col-md-6 col-lg-4">
            <h5 className="mb-4 d-inline-flex">Links</h5>

            <ul className="d-flex flex-column gap-2">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/teams">Our Teams</Link>
              </li>
            </ul>
          </div>
          
          <div className="col col-12 col-md-6 col-lg-4">
            <h5 className="mb-4 d-inline-flex">Newsletter</h5>

            <form action="/" className="d-flex flex-column row-gap-4">
              <input className={["form-control", openSans.className].join(" ")} placeholder="Your Email" />
              
              <LinkCTA
                href='/'
                className='text-white'
                text='Subscribe'
              />
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-4">
          <span>All rights reserved.</span>

          <div className="social d-flex align-items-center gap-3 flex-shrink-0">
            <Link href="/" aria-label="Facebook">
              <FaFacebookF />
            </Link>

            <Link href="/" aria-label="Instagram">
              <FaInstagram />
            </Link>

            <Link href="/" aria-label="Twitter">
              <FaTwitter />
            </Link>

            <Link href="/" aria-label="Youtube">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer