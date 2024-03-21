import { sarpanch } from "@/utils/fonts"
import Link from 'next/link'
import { FaDumbbell } from 'react-icons/fa'

const Logo = () => {
  return (
    <Link 
      className={[
        "logo d-flex align-items-center column-gap-2 flex-shrink-0", sarpanch.className
      ].join(" ")} 
      href="/"
    >
      <FaDumbbell />
      <span>Fit Trus</span>
    </Link>
  )
}

export default Logo